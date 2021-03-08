/**
 * Supports stylelint@^13.12.0
 */
module.exports = {
  rules: {
    /** Possible errors */
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    // 'font-family-no-missing-generic-family-keyword': null,
    'named-grid-areas-no-invalid': true,
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'property-no-unknown': true,
    'keyframe-declaration-no-important': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': [true, { ignore: ['consecutive-duplicates'] }],
    'declaration-block-no-shorthand-property-overrides': true,
    'block-no-empty': true,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep', 'export', 'global'] }],
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep', 'v-global'] }],
    'selector-type-no-unknown': true,
    'media-feature-name-no-unknown': true,
    'at-rule-no-unknown': true,
    'comment-no-empty': true,
    // 'no-descending-specificity': null,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,

    /** Limit language features */
    'color-named': 'always-where-possible',
    'color-function-notation': 'modern',
    'shorthand-property-no-redundant-values': [true, { severity: 'warning' }],
    'value-no-vendor-prefix': [true, { ignoreValues: ['box', 'inline-box'] }],
    'property-disallowed-list': ['widows'],
    'property-no-vendor-prefix': [true, { ignoreProperties: ['box-orient'] }],
    'selector-max-empty-lines': 0,
    'selector-max-universal': 1,
    'selector-no-vendor-prefix': [true, { ignoreSelectors: [] }],
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-no-vendor-prefix': true,
    'at-rule-property-required-list': {
      'font-face': ['font-family', 'src'],
    },
    'max-nesting-depth': [3, { ignore: ['blockless-at-rules'] }],

    /** Stylistic issues */
    'color-hex-case': 'lower',
    'font-weight-notation': 'named-where-possible',
    'function-comma-newline-after': ['never-multi-line', { severity: 'warning' }],
    'function-comma-newline-before': ['never-multi-line', { severity: 'warning' }],
    'function-comma-space-after': ['always-single-line', { severity: 'warning' }],
    'function-comma-space-before': ['never', { severity: 'warning' }],
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': ['never-multi-line', { severity: 'warning' }],
    'function-parentheses-space-inside': ['never', { severity: 'warning' }],
    'function-url-quotes': 'always',
    'function-whitespace-after': ['always', { severity: 'warning' }],
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': [true, { severity: 'warning' }],
    'string-quotes': ['single', { severity: 'warning' }],
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': ['always-multi-line', { severity: 'warning' }],
    'value-list-comma-newline-before': ['never-multi-line', { severity: 'warning' }],
    'value-list-comma-space-after': ['always-single-line', { severity: 'warning' }],
    'value-list-comma-space-before': ['never', { severity: 'warning' }],
    'property-case': 'lower',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': ['always', { severity: 'warning' }],
    'declaration-colon-space-after': ['always-single-line', { severity: 'warning' }],
    'declaration-colon-space-before': ['never', { severity: 'warning' }],
    'declaration-block-semicolon-newline-after': ['always', { severity: 'warning' }],
    'declaration-block-semicolon-newline-before': ['never-multi-line', { severity: 'warning' }],
    'declaration-block-semicolon-space-before': ['never', { severity: 'warning' }],
    'declaration-block-trailing-semicolon': ['always', { severity: 'warning' }],
    'block-closing-brace-empty-line-before': ['never', { severity: 'warning' }],
    'block-closing-brace-newline-after': ['always', { severity: 'warning' }],
    'block-closing-brace-newline-before': ['always', { severity: 'warning' }],
    'block-opening-brace-newline-after': ['always', { severity: 'warning' }],
    // 'block-opening-brace-newline-before': ['never-multi-line', { severity: 'warning' }],
    'block-opening-brace-space-before': ['always', { severity: 'warning' }],
    'selector-attribute-brackets-space-inside': ['never', { severity: 'warning' }],
    'selector-attribute-operator-space-after': ['never', { severity: 'warning' }],
    'selector-attribute-operator-space-before': ['never', { severity: 'warning' }],
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': ['always', { severity: 'warning' }],
    'selector-combinator-space-before': ['always', { severity: 'warning' }],
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': ['never', { severity: 'warning' }],
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': ['double', { severity: 'warning' }],
    'selector-type-case': 'lower',
    'selector-list-comma-newline-before': ['never-multi-line', { severity: 'warning' }],
    'selector-list-comma-space-after': ['always-single-line', { severity: 'warning' }],
    'selector-list-comma-space-before': ['never', { severity: 'warning' }],
    'media-feature-colon-space-after': ['always', { severity: 'warning' }],
    'media-feature-colon-space-before': ['never', { severity: 'warning' }],
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': ['never', { severity: 'warning' }],
    'media-feature-range-operator-space-after': ['always', { severity: 'warning' }],
    'media-feature-range-operator-space-before': ['always', { severity: 'warning' }],
    'media-query-list-comma-newline-before': ['never-multi-line', { severity: 'warning' }],
    'media-query-list-comma-space-after': ['always-single-line', { severity: 'warning' }],
    'media-query-list-comma-space-before': ['never', { severity: 'warning' }],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': ['always', { severity: 'warning' }],
    'at-rule-semicolon-newline-after': ['always', { severity: 'warning' }],
    'at-rule-semicolon-space-before': ['never', { severity: 'warning' }],
    'comment-whitespace-inside': ['always', { severity: 'warning' }],
    indentation: [2, { baseIndentLevel: 0, severity: 'warning' }],
    linebreaks: ['unix', { severity: 'warning' }],
    'max-empty-lines': [1, { severity: 'warning' }],
    'no-eol-whitespace': [true, { severity: 'warning' }],
    'no-missing-end-of-source-newline': [true, { severity: 'warning' }],
    'no-empty-first-line': [true, { severity: 'warning' }],
    'unicode-bom': ['never', { severity: 'warning' }],
  },
};
