const path = require('path')
const { hasInstalledPackage } = require('./utils')

const presets = [
  path.resolve(__dirname, './base.js'),
  path.resolve(__dirname, './syntax.js'),
]

if (hasInstalledPackage('stylelint-scss')) {
  presets.push(path.resolve(__dirname, './scss.js'))
}

if (hasInstalledPackage('stylelint-plugin-aurora')) {
  presets.push(path.resolve(__dirname, './aurora/index.js'))
}

if (hasInstalledPackage('stylelint-order')) {
  presets.push(path.resolve(__dirname, './order/index.js'))
}

module.exports = {
  extends: presets,
}
