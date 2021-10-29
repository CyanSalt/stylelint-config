module.exports = {
  extends: [
    'stylelint-config-recommended',
  ],
  rules: {
    /** Possible errors */
    // 不启用强制字体使用关键字回退
    'font-family-no-missing-generic-family-keyword': null,
    // 允许 export 等特殊作用的伪类
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep', 'export', 'global'] }],
    // 允许 v-deep 等特殊作用的伪元素
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep', 'v-global'] }],
    // 不启用严格顺序覆盖检查
    'no-descending-specificity': null,

    /** Limit language features */
    // 总是使用颜色名称
    'color-named': 'always-where-possible',
    // 必须使用新的 rgb() 函数规范
    'color-function-notation': 'modern',
    // 自动优化属性为简写
    'shorthand-property-no-redundant-values': [true, { severity: 'warning' }],
    // 禁止属性值使用私有前缀
    'value-no-vendor-prefix': [true, { ignoreValues: ['box', 'inline-box'] }],
    // 禁止使用某些属性（通常是书写错误）
    'property-disallowed-list': ['widows'],
    // 禁止属性名使用私有前缀
    'property-no-vendor-prefix': [true, { ignoreProperties: ['box-orient'] }],
    // 单个规则块的选择器之间禁止空行
    'selector-max-empty-lines': 0,
    // 禁止通配符嵌套
    'selector-max-universal': 1,
    // 禁止选择器使用私有前缀
    'selector-no-vendor-prefix': [true, { ignoreSelectors: [] }],
    // 禁止媒体查询值使用私有前缀
    'media-feature-name-no-vendor-prefix': true,
    // 禁止@规则使用私有前缀
    'at-rule-no-vendor-prefix': true,
    // @font-face 必须指定 font-family 和 src
    'at-rule-property-required-list': {
      'font-face': ['font-family', 'src'],
    },
    // 禁止嵌套超过三层
    'max-nesting-depth': [3, { ignore: ['blockless-at-rules'] }],

    /** Stylistic issues */
    // 十六进制颜色统一使用大写字母
    'color-hex-case': 'lower',
    // 总是使用字重名称
    'font-weight-notation': 'named-where-possible',
    // 自动删除函数调用参数列表中的换行
    'function-comma-newline-after': ['never-multi-line', { severity: 'warning' }],
    'function-comma-newline-before': ['never-multi-line', { severity: 'warning' }],
    // 自动在函数调用的参数逗号后添加空格
    'function-comma-space-after': ['always-single-line', { severity: 'warning' }],
    'function-comma-space-before': ['never', { severity: 'warning' }],
    // 函数内禁止出现空行
    'function-max-empty-lines': 0,
    // 函数名必须使用小写字母
    'function-name-case': 'lower',
    // 自动删除函数调用的括号内的换行和空格
    'function-parentheses-newline-inside': ['never-multi-line', { severity: 'warning' }],
    'function-parentheses-space-inside': ['never', { severity: 'warning' }],
    // url() 内必须使用引号包裹
    'function-url-quotes': 'always',
    // 自动在多个函数之间添加空格
    'function-whitespace-after': ['always', { severity: 'warning' }],
    // 禁止省略小数点的前导0
    'number-leading-zero': 'always',
    // 自动删除小数点后多余的0
    'number-no-trailing-zeros': [true, { severity: 'warning' }],
    // 自动替换引号为单引号
    'string-quotes': ['single', { severity: 'warning' }],
    // 单位必须使用小写
    'unit-case': 'lower',
    // 关键字必须使用小写
    'value-keyword-case': 'lower',
    // 自动优化多个属性值换行为逗号后换行
    'value-list-comma-newline-after': ['always-multi-line', { severity: 'warning' }],
    'value-list-comma-newline-before': ['never-multi-line', { severity: 'warning' }],
    // 自动优化空格于多个属性值间的逗号后
    'value-list-comma-space-after': ['always-single-line', { severity: 'warning' }],
    'value-list-comma-space-before': ['never', { severity: 'warning' }],
    // 属性名必须使用小写
    'property-case': 'lower',
    // !important之间禁止使用空格
    'declaration-bang-space-after': 'never',
    // 自动在 !important 前添加空格
    'declaration-bang-space-before': ['always', { severity: 'warning' }],
    // 自动优化空格于声明的冒号后
    'declaration-colon-space-after': ['always-single-line', { severity: 'warning' }],
    'declaration-colon-space-before': ['never', { severity: 'warning' }],
    // 自动优化为分号后添加换行
    'declaration-block-semicolon-newline-after': ['always', { severity: 'warning' }],
    'declaration-block-semicolon-newline-before': ['never-multi-line', { severity: 'warning' }],
    // 自动删除分号前的空格
    'declaration-block-semicolon-space-before': ['never', { severity: 'warning' }],
    // 自动为规则块添加尾随分号
    'declaration-block-trailing-semicolon': ['always', { severity: 'warning' }],
    // 自动删除块结尾的空行
    'block-closing-brace-empty-line-before': ['never', { severity: 'warning' }],
    // 自动优化块的花括号为 One True 风格
    'block-closing-brace-newline-after': ['always', { severity: 'warning' }],
    'block-closing-brace-newline-before': ['always', { severity: 'warning' }],
    'block-opening-brace-newline-after': ['always', { severity: 'warning' }],
    // 'block-opening-brace-newline-before': ['never-multi-line', { severity: 'warning' }],
    // 自动在块的花括号前添加空格
    'block-opening-brace-space-before': ['always', { severity: 'warning' }],
    // 自动去除属性选择器的方括号内的空格
    'selector-attribute-brackets-space-inside': ['never', { severity: 'warning' }],
    // 自动去除属性选择器运算符两侧的空格
    'selector-attribute-operator-space-after': ['never', { severity: 'warning' }],
    'selector-attribute-operator-space-before': ['never', { severity: 'warning' }],
    // 属性选择器的取值必须加引号
    'selector-attribute-quotes': 'always',
    // 自动在选择器连接符（>/+/~）两侧添加空格
    'selector-combinator-space-after': ['always', { severity: 'warning' }],
    'selector-combinator-space-before': ['always', { severity: 'warning' }],
    // 禁止后代选择器使用空格之外的空白字符作为分隔
    'selector-descendant-combinator-no-non-space': true,
    // 伪类必须使用小写
    'selector-pseudo-class-case': 'lower',
    // 自动删除伪类选择器参数括号内部的空格
    'selector-pseudo-class-parentheses-space-inside': ['never', { severity: 'warning' }],
    // 伪元素必须使用小写
    'selector-pseudo-element-case': 'lower',
    // 自动优化伪元素使用双冒号表示法
    'selector-pseudo-element-colon-notation': ['double', { severity: 'warning' }],
    // 标签选择器必须使用小写
    'selector-type-case': 'lower',
    // 自动删除选择器列表逗号前的换行
    'selector-list-comma-newline-before': ['never-multi-line', { severity: 'warning' }],
    // 自动为选择器列表的逗号后添加空格
    'selector-list-comma-space-after': ['always-single-line', { severity: 'warning' }],
    // 自动删除选择器列表逗号后的空格
    'selector-list-comma-space-before': ['never', { severity: 'warning' }],
    // 自动优化空格于媒体查询条件的冒号后
    'media-feature-colon-space-after': ['always', { severity: 'warning' }],
    'media-feature-colon-space-before': ['never', { severity: 'warning' }],
    // 媒体查询条件的属性必须使用小写
    'media-feature-name-case': 'lower',
    // 自动删除媒体查询条件括号内侧的空格
    'media-feature-parentheses-space-inside': ['never', { severity: 'warning' }],
    // 自动删除媒体查询条件范围运算符两侧的空格
    'media-feature-range-operator-space-after': ['always', { severity: 'warning' }],
    'media-feature-range-operator-space-before': ['always', { severity: 'warning' }],
    // 自动删除媒体查询列表逗号前的换行
    'media-query-list-comma-newline-before': ['never-multi-line', { severity: 'warning' }],
    // 自动为媒体查询列表的逗号后添加空格
    'media-query-list-comma-space-after': ['always-single-line', { severity: 'warning' }],
    // 自动删除媒体查询列表逗号后的空格
    'media-query-list-comma-space-before': ['never', { severity: 'warning' }],
    // @规则名必须使用小写
    'at-rule-name-case': 'lower',
    // 自动在@规则名后添加空格
    'at-rule-name-space-after': ['always', { severity: 'warning' }],
    // 自动在@规则的分号后换行
    'at-rule-semicolon-newline-after': ['always', { severity: 'warning' }],
    // 自动删除@规则分号前的空格
    'at-rule-semicolon-space-before': ['never', { severity: 'warning' }],
    // 自动在注释边界添加空格
    'comment-whitespace-inside': ['always', { severity: 'warning' }],
    // 自动优化缩进为两个空格
    indentation: [2, { baseIndentLevel: 0, severity: 'warning' }],
    // 自动替换换行为 LF
    linebreaks: ['unix', { severity: 'warning' }],
    // 自动删除超过一个的连续空行
    'max-empty-lines': [1, { severity: 'warning' }],
    // 自动删除行尾空格
    'no-eol-whitespace': [true, { severity: 'warning' }],
    // 自动在文件结尾添加空行
    'no-missing-end-of-source-newline': [true, { severity: 'warning' }],
    // 自动删除文件开头的空行
    'no-empty-first-line': [true, { severity: 'warning' }],
    // 自动删除 Unicode BOM 头
    'unicode-bom': ['never', { severity: 'warning' }],
  },
}
