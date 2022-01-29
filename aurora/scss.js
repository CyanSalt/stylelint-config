module.exports = {
  rules: {
    // 选择器组合符在嵌套时必须作为内部的前缀使用
    'aurora/selector-nested-combinator-position': ['as-prefix', { includes: ['::v-deep'] }, { severity: 'warning' }],
  },
}
