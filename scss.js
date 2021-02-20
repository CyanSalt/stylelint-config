/**
 * Supports stylelint-scss@^3.19.0
 */
module.exports = {
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    'function-calc-no-invalid': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
