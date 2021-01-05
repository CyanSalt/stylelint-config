const path = require('path');
const { hasInstalledPackage } = require('./utils');

const presets = [
  path.resolve(__dirname, './base.js'),
];

if (hasInstalledPackage('stylelint-scss')) {
  presets.push(path.resolve(__dirname, './scss.js'));
}

module.exports = {
  extends: presets,
};
