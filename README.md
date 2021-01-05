# @cyansalt/stylelint-config

My Stylelint configuration.

## Installation

```shell
npm install @cyansalt/stylelint-config
```

## Without Configuration

```javascript
// stylelint.config.js
module.exports {
  // ...
  extends: [
    '@cyansalt/stylelint-config',
  ],
  // ...
}
```

The ruleset will check up your node modules and enable available configurations automatically.

## Basic Usage

```javascript
// stylelint.config.js
module.exports {
  // ...
  extends: [
    '@cyansalt/stylelint-config/base',
  ],
  // ...
}
```

Note: `stylelint-config-recommended` is not needed since `base` has extended the rule set by default.

### SCSS

*Need to install `stylelint-scss` manually*

```javascript
// stylelint.config.js
module.exports {
  // ...
  extends: [
    '@cyansalt/stylelint-config/base',
    '@cyansalt/stylelint-config/scss',
  ],
  // ...
}
```
