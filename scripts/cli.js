#!/usr/bin/env node
const childProcess = require('child_process')
const path = require('path')
const readline = require('readline')
const semver = require('semver')
const yargsParser = require('yargs-parser')
const plugins = require('../plugins.json')
const { getInstalledPackageVersion, hasInstalledPackage } = require('../utils')

function getOutdatedPackages(checkAll) {
  const result = []
  for (const [name, metadata] of Object.entries(plugins)) {
    const installedVersion = getInstalledPackageVersion(name)
    if (!installedVersion) {
      const dependencies = metadata.requires ? Object.entries(metadata.requires) : []
      if (dependencies.every(([dependency, version]) => hasInstalledPackage(dependency, version))) {
        result.push({
          name,
          current: installedVersion,
          wanted: metadata.version,
        })
      }
    } else if (semver.lt(installedVersion, semver.minVersion(metadata.version))) {
      result.push({
        name,
        current: installedVersion,
        wanted: metadata.version,
      })
    }
  }
  return checkAll ? result : result.filter(entry => entry.current)
}

async function ask(question) {
  return new Promise(resolve => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
    rl.question(question, answer => {
      rl.close()
      resolve(['', 'y', 'Y'].includes(answer))
    })
  })
}

function getNPMClient(args) {
  if (args.npmClient) return args.npmClient
  const execPath = process.env.npm_execpath
  return Boolean(execPath) && path.basename(execPath, path.extname(execPath)) === 'yarn'
    ? 'yarn' : 'npm'
}

async function update(args) {
  const packages = getOutdatedPackages(args.all)
  if (args.json) {
    console.log(JSON.stringify(packages, null, 2))
    return
  }
  if (!packages.length) {
    console.log('Stylelint packages are already up-to-date.')
    return
  }
  console.log([
    `${packages.length} package${packages.length > 1 ? 's are' : ' is'} outdated:\n`,
    ...packages.map(entry => `- ${entry.name}: ${entry.current || 'N/A'} => ${entry.wanted}`),
    '',
  ].join('\n'))
  if (!args.y) {
    const result = await ask('Continue? (Y/n) ')
    if (!result) return
  }
  const [command, ...installArgs] = getNPMClient(args) === 'yarn'
    ? ['yarn', 'add', '--dev']
    : ['npm', 'install', '--save-dev']
  childProcess.spawn(command, [...installArgs, ...packages.map(entry => `${entry.name}@${entry.wanted}`)], { stdio: 'inherit' })
}

module.exports = {
  getOutdatedPackages,
  getNPMClient,
}

if (require.main === module) {
  const args = yargsParser(process.argv.slice(2), {
    alias: {
      all: ['a'],
    },
  })
  if (args.update) {
    update(args)
  }
}
