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

The ruleset will check your project dependencies and enable available configurations automatically. This eliminates the need for you to know any specific ruleset configuration below.

## Basic Ruleset

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

*Need to install [`stylelint-scss`](https://www.npmjs.com/package/stylelint-scss) manually*

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

## Plugins

We have provided a number of plugin configurations as our recommendation.

### Aurora

Various Stylelint rules in one plugin.

*Need to install [`stylelint-plugin-aurora`](https://www.npmjs.com/package/stylelint-plugin-aurora) manually*

```javascript
// stylelint.config.js
module.exports {
  // ...
  extends: [
    '@cyansalt/stylelint-config/base',
    '@cyansalt/stylelint-config/aurora/base',
    // for SCSS
    '@cyansalt/stylelint-config/aurora/scss',
  ],
}
```

### Order

Autofix the property order of stylesheets.

*Need to install [`stylelint-order`](https://www.npmjs.com/package/stylelint-order) manually*

```javascript
// stylelint.config.js
module.exports {
  // ...
  extends: [
    '@cyansalt/stylelint-config/order',
  ],
}
```

## CLI

You can update current Stylelint packages with `npx`:

```shell
npx @cyansalt/stylelint-config --update
```

- You can pass `--yes` or `-y` to skip the question and update packages immediately.
- Or install/update all recommended packages with `--all` or `-a` argument.
