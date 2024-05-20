import { defineConfig } from '../config.js'
import { GLOB_ALL } from '../globs.js'

export default defineConfig(options => {
  return [
    {
      files: [GLOB_ALL],
      plugins: [
        'stylelint-plugin-aurora',
      ],
    },
    ...(options.scss ? [
      {
        files: [GLOB_ALL],
        rules: {
          // 选择器组合符在嵌套时必须作为内部的前缀使用
          'aurora/selector-nested-combinator-position': ['as-prefix', { includes: ['::v-deep'] }, { severity: 'warning' }],
        },
      },
    ] : []),
  ]
})
