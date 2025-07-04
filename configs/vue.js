import { defineConfig } from '../config.js'
import { GLOB_VUE } from '../globs.js'

export default defineConfig(options => {
  return [
    {
      name: '@cyansalt/vue/syntax',
      files: [GLOB_VUE],
      customSyntax: 'postcss-html',
    },
  ]
})
