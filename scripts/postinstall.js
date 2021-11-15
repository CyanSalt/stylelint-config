const { getNPMClient, getOutdatedPackages } = require('./cli');

(async () => {
  const outdated = await getOutdatedPackages()
  if (outdated.length) {
    const npmClient = getNPMClient({})
    console.warn([
      'Some Stylelint packages are outdated. You can run the command below to update them:\n',
      `  ${npmClient === 'yarn' ? 'yarn ' : 'npx @cyansalt/'}stylelint-config --update\n`,
    ].join('\n'))
  }
})()
