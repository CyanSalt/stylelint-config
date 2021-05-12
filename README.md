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

To force the configurations of certain packages, you can set the environment variable `NODE_MODULES`:

```js
// stylelint.config.js
process.env.NODE_MODULES = `stylelint-scss@:${process.env.NODE_MODULES}`

module.exports {
  // ...
  extends: [
    '@cyansalt/stylelint-config',
  ],
  // ...
}
```

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

## CLI

You can update current Stylelint packages with `npx`:

```shell
npx @cyansalt/stylelint-config --update
```

- You can pass `-y` to skip the question and update packages immediately.
- Or install/update all recommended packages with `-a` argument.
