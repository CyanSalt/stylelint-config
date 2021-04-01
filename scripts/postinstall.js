const { getOutdatedPackages } = require('./cli')

if (getOutdatedPackages().length) {
  console.warn([
    'Some Stylelint packages are outdated. You can run the command below to update them:\n',
    '  npx @cyansalt/stylelint-config --update\n',
  ].join('\n'))
}
