module.exports = {
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    /** 覆盖默认规则 */
    // 允许 SCSS 的 at-rule
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    // 允许 @use 出现在 @import 之前
    'no-invalid-position-at-import-rule': [true, { ignoreAtRules: ['use'] }],

    // 自动删除 @function 函数名后的空格
    'scss/at-function-parentheses-space-before': ['never', { severity: 'warning' }],
    // 自动删除 @mixin Mixin 名后的空格
    'scss/at-mixin-parentheses-space-before': ['never', { severity: 'warning' }],
    // 自动优化空格于变量的冒号后
    'scss/dollar-variable-colon-space-after': ['always', { severity: 'warning' }],
    'scss/dollar-variable-colon-space-before': ['never', { severity: 'warning' }],
    // 必须在单行注释 // 的后面添加空格
    'scss/double-slash-comment-whitespace-inside': 'always',
    // 禁用属性嵌套功能
    'scss/declaration-nested-properties': 'never',
    // 操作符换行时，必须出现在下一行开头
    'scss/operator-no-newline-after': true,
    // 操作符两侧必须添加空格
    'scss/operator-no-unspaced': true,
    // 禁止在同一个块内重复定义变量
    'scss/no-duplicate-dollar-variables': true,
    // 禁止在同一个块内重复定义 Mixin
    'scss/no-duplicate-mixins': true,
  },
}
