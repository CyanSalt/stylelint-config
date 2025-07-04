import { defineConfig } from '../config.js'
import { GLOB_ALL } from '../globs.js'

export default defineConfig(options => {
  return [
    {
      name: '@cyansalt/stylistic/setup',
      files: [GLOB_ALL],
      plugins: [
        '@stylistic/stylelint-plugin',
      ],
      rules: {
        // 十六进制颜色统一使用小写字母
        '@stylistic/color-hex-case': 'lower',
        // 自动删除函数调用参数列表中的换行
        '@stylistic/function-comma-newline-after': ['never-multi-line', { severity: 'warning' }],
        '@stylistic/function-comma-newline-before': ['never-multi-line', { severity: 'warning' }],
        // 自动在函数调用的参数逗号后添加空格
        '@stylistic/function-comma-space-after': ['always-single-line', { severity: 'warning' }],
        '@stylistic/function-comma-space-before': ['never', { severity: 'warning' }],
        // 函数内禁止出现空行
        '@stylistic/function-max-empty-lines': 0,
        // 自动删除函数调用的括号内的换行和空格
        '@stylistic/function-parentheses-newline-inside': ['never-multi-line', { severity: 'warning' }],
        '@stylistic/function-parentheses-space-inside': ['never', { severity: 'warning' }],
        // 自动在多个函数之间添加空格
        '@stylistic/function-whitespace-after': ['always', { severity: 'warning' }],
        // 禁止省略小数点的前导0
        '@stylistic/number-leading-zero': 'always',
        // 自动删除小数点后多余的0
        '@stylistic/number-no-trailing-zeros': [true, { severity: 'warning' }],
        // 自动替换引号为单引号
        '@stylistic/string-quotes': ['single', { severity: 'warning' }],
        // 单位必须使用小写
        '@stylistic/unit-case': 'lower',
        // 自动优化多个属性值换行为逗号后换行
        '@stylistic/value-list-comma-newline-after': ['always-multi-line', { severity: 'warning' }],
        '@stylistic/value-list-comma-newline-before': ['never-multi-line', { severity: 'warning' }],
        // 自动优化空格于多个属性值间的逗号后
        '@stylistic/value-list-comma-space-after': ['always-single-line', { severity: 'warning' }],
        '@stylistic/value-list-comma-space-before': ['never', { severity: 'warning' }],
        // 属性名必须使用小写
        '@stylistic/property-case': ['lower', { ignoreSelectors: [':export'] }],
        // !important之间禁止使用空格
        '@stylistic/declaration-bang-space-after': 'never',
        // 自动在 !important 前添加空格
        '@stylistic/declaration-bang-space-before': ['always', { severity: 'warning' }],
        // 自动优化空格于声明的冒号后
        '@stylistic/declaration-colon-space-after': ['always-single-line', { severity: 'warning' }],
        '@stylistic/declaration-colon-space-before': ['never', { severity: 'warning' }],
        // 自动优化为分号后添加换行
        '@stylistic/declaration-block-semicolon-newline-after': ['always', { severity: 'warning' }],
        '@stylistic/declaration-block-semicolon-newline-before': ['never-multi-line', { severity: 'warning' }],
        // 自动删除分号前的空格
        '@stylistic/declaration-block-semicolon-space-before': ['never', { severity: 'warning' }],
        // 自动为规则块添加尾随分号
        '@stylistic/declaration-block-trailing-semicolon': ['always', { severity: 'warning' }],
        // 自动删除块结尾的空行
        '@stylistic/block-closing-brace-empty-line-before': ['never', { severity: 'warning' }],
        // 自动优化块的花括号为 One True 风格
        '@stylistic/block-closing-brace-newline-after': ['always', { severity: 'warning' }],
        '@stylistic/block-closing-brace-newline-before': ['always', { severity: 'warning' }],
        '@stylistic/block-opening-brace-newline-after': ['always', { severity: 'warning' }],
        // '@stylistic/block-opening-brace-newline-before': ['never-multi-line', { severity: 'warning' }],
        // 自动在块的花括号前添加空格
        '@stylistic/block-opening-brace-space-before': ['always', { severity: 'warning' }],
        // 自动去除属性选择器的方括号内的空格
        '@stylistic/selector-attribute-brackets-space-inside': ['never', { severity: 'warning' }],
        // 自动去除属性选择器运算符两侧的空格
        '@stylistic/selector-attribute-operator-space-after': ['never', { severity: 'warning' }],
        '@stylistic/selector-attribute-operator-space-before': ['never', { severity: 'warning' }],
        // 自动在选择器连接符（>/+/~）两侧添加空格
        '@stylistic/selector-combinator-space-after': ['always', { severity: 'warning' }],
        '@stylistic/selector-combinator-space-before': ['always', { severity: 'warning' }],
        // 禁止后代选择器使用空格之外的空白字符作为分隔
        '@stylistic/selector-descendant-combinator-no-non-space': true,
        // 单个规则块的选择器之间禁止空行
        '@stylistic/selector-max-empty-lines': 0,
        // 伪类必须使用小写
        '@stylistic/selector-pseudo-class-case': 'lower',
        // 自动删除伪类选择器参数括号内部的空格
        '@stylistic/selector-pseudo-class-parentheses-space-inside': ['never', { severity: 'warning' }],
        // 伪元素必须使用小写
        '@stylistic/selector-pseudo-element-case': 'lower',
        // 自动删除选择器列表逗号前的换行
        '@stylistic/selector-list-comma-newline-before': ['never-multi-line', { severity: 'warning' }],
        // 自动为选择器列表的逗号后添加空格
        '@stylistic/selector-list-comma-space-after': ['always-single-line', { severity: 'warning' }],
        // 自动删除选择器列表逗号后的空格
        '@stylistic/selector-list-comma-space-before': ['never', { severity: 'warning' }],
        // 自动优化空格于媒体查询条件的冒号后
        '@stylistic/media-feature-colon-space-after': ['always', { severity: 'warning' }],
        '@stylistic/media-feature-colon-space-before': ['never', { severity: 'warning' }],
        // 媒体查询条件的属性必须使用小写
        '@stylistic/media-feature-name-case': 'lower',
        // 自动删除媒体查询条件括号内侧的空格
        '@stylistic/media-feature-parentheses-space-inside': ['never', { severity: 'warning' }],
        // 自动删除媒体查询条件范围运算符两侧的空格
        '@stylistic/media-feature-range-operator-space-after': ['always', { severity: 'warning' }],
        '@stylistic/media-feature-range-operator-space-before': ['always', { severity: 'warning' }],
        // 自动删除媒体查询列表逗号前的换行
        '@stylistic/media-query-list-comma-newline-before': ['never-multi-line', { severity: 'warning' }],
        // 自动为媒体查询列表的逗号后添加空格
        '@stylistic/media-query-list-comma-space-after': ['always-single-line', { severity: 'warning' }],
        // 自动删除媒体查询列表逗号后的空格
        '@stylistic/media-query-list-comma-space-before': ['never', { severity: 'warning' }],
        // @规则名必须使用小写
        '@stylistic/at-rule-name-case': 'lower',
        // 自动在@规则名后添加空格
        '@stylistic/at-rule-name-space-after': ['always', { severity: 'warning' }],
        // 自动在@规则的分号后换行
        '@stylistic/at-rule-semicolon-newline-after': ['always', { severity: 'warning' }],
        // 自动删除@规则分号前的空格
        '@stylistic/at-rule-semicolon-space-before': ['never', { severity: 'warning' }],
        // 自动优化缩进为两个空格
        '@stylistic/indentation': [2, { baseIndentLevel: 0, severity: 'warning' }],
        // 自动替换换行为 LF
        '@stylistic/linebreaks': ['unix', { severity: 'warning' }],
        // 自动删除超过一个的连续空行
        '@stylistic/max-empty-lines': [1, { severity: 'warning' }],
        // 自动删除文件开头的空行
        '@stylistic/no-empty-first-line': [true, { severity: 'warning' }],
        // 自动删除行尾空格
        '@stylistic/no-eol-whitespace': [true, { severity: 'warning' }],
        // 自动删除多余的分号
        '@stylistic/no-extra-semicolons': true,
        // 自动在文件结尾添加空行
        '@stylistic/no-missing-end-of-source-newline': [true, { severity: 'warning' }],
        // 自动删除 Unicode BOM 头
        '@stylistic/unicode-bom': ['never', { severity: 'warning' }],
      },
    },
  ]
})
