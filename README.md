# @cyansalt/stylelint-config

[![npm](https://img.shields.io/npm/v/@cyansalt/stylelint-config.svg)](https://www.npmjs.com/package/@cyansalt/stylelint-config)

My Stylelint configuration preset.

## Installation

```shell
npm install --save-dev @cyansalt/stylelint-config
```

## Usage

```javascript
// stylelint.config.js
import config from '@cyansalt/stylelint-config'

export default {
  overrides: config(),
}
```

## Options

```javascript
// stylelint.config.js
import config from '@cyansalt/stylelint-config'

export default {
  overrides: config({

    // Whether to enable SCSS rules.
    // It will be enabled when `scss` is installed in the project by default.
    react: true,

  }),
}
```
