# @cyansalt/stylelint-config

[![npm](https://img.shields.io/npm/v/@cyansalt/stylelint-config.svg)](https://www.npmjs.com/package/@cyansalt/stylelint-config)

My Stylelint base configuration.

## Installation

```shell
npm install --save-dev @cyansalt/stylelint-config
```

## Usage

### Basic Ruleset

```javascript
// stylelint.config.js
module.exports {
  // ...
  extends: [
    '@cyansalt/stylelint-config',
    // for Vue and SCSS
    '@cyansalt/stylelint-config/syntax',
  ],
  // ...
}
```

Note: `stylelint-config-recommended` is not needed since it has been extended by default.

### SCSS

```javascript
// stylelint.config.js
module.exports {
  // ...
  extends: [
    '@cyansalt/stylelint-config',
    '@cyansalt/stylelint-config/syntax',
    '@cyansalt/stylelint-config/scss',
  ],
  // ...
}
```

### Plugins

We have provided a number of plugin configurations as our recommendation.

#### Aurora

Various Stylelint rules in one plugin.

```javascript
// stylelint.config.js
module.exports {
  // ...
  extends: [
    '@cyansalt/stylelint-config',
    '@cyansalt/stylelint-config/aurora',
    // for SCSS
    '@cyansalt/stylelint-config/aurora/scss',
  ],
}
```

#### Order

Autofix the property order of stylesheets.

```javascript
// stylelint.config.js
module.exports {
  // ...
  extends: [
    '@cyansalt/stylelint-config',
    '@cyansalt/stylelint-config/order',
  ],
}
```
