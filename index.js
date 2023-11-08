module.exports = {
  extends: [
    'stylelint-config-recommended',
    require.resolve('./stylistic.js'),
  ],
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  rules: {
    /** Avoid errors */
    // 不启用严格顺序覆盖检查
    'no-descending-specificity': null,
    // 不启用强制字体使用关键字回退
    'font-family-no-missing-generic-family-keyword': null,
    // 禁止定义非 CSS 规范的属性值
    'declaration-property-value-no-unknown': true,
    // 禁止定义非 CSS 规范的 media query 值
    'media-feature-name-value-no-unknown': true,
    // 允许 export 等特殊作用的伪类
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: [
        // ICSS
        'export',
        // Vue
        'deep',
        'global',
        // Webkit & Blink Scrollbar
        // https://webkit.org/blog/363/styling-scrollbars/
        'horizontal',
        'vertical',
        'decrement',
        'increment',
        'start',
        'end',
        'double-button',
        'single-button',
        'no-button',
        'corner-present',
        'window-inactive',
      ],
    }],
    // 允许 v-deep 等特殊作用的伪元素
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: [
        // Vue
        'v-deep',
      ],
    }],

    /** Enforce non-stylistic conventions */
    // 禁止@规则使用私有前缀
    'at-rule-no-vendor-prefix': true,
    // @font-face 必须指定 font-family 和 src
    'at-rule-property-required-list': {
      'font-face': ['font-family', 'src'],
    },
    // 禁止媒体查询值使用私有前缀
    'media-feature-name-no-vendor-prefix': true,
    // 禁止使用某些属性（通常是书写错误）
    'property-disallowed-list': ['widows'],
    // 禁止属性名使用私有前缀
    'property-no-vendor-prefix': [true, {
      ignoreProperties: [
        // Webkit box
        'box-orient',
        // Webkit text background
        'background-clip',
      ],
    }],
    // 禁止选择器使用私有前缀
    'selector-no-vendor-prefix': [true, { ignoreSelectors: [] }],
    // 禁止属性值使用私有前缀
    'value-no-vendor-prefix': [true, {
      ignoreValues: [
        // Webkit box
        'box',
        'inline-box',
      ],
    }],
    // 禁止嵌套超过 4 层
    'max-nesting-depth': [4, { ignore: ['blockless-at-rules', 'pseudo-classes'] }],
    // 禁止通配符嵌套
    'selector-max-universal': 1,
    // 必须使用新的 rgb() 函数规范
    'color-function-notation': 'modern',
    // 自动保持 keyframe 使用关键字或百分比一致
    'keyframe-selector-notation': ['percentage-unless-within-keyword-only-block', { severity: 'warning' }],
    // 自动优化伪元素使用双冒号表示法
    'selector-pseudo-element-colon-notation': ['double', { severity: 'warning' }],
    // url() 内必须使用引号包裹
    'function-url-quotes': 'always',
    // 自动优化属性为简写
    'shorthand-property-no-redundant-values': [true, { severity: 'warning' }],

    /** Enforce conventions */
    // 函数名必须使用小写字母
    'function-name-case': 'lower',
    // 标签选择器必须使用小写
    'selector-type-case': 'lower',
    // 关键字必须使用小写
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
    // 属性选择器的取值必须加引号
    'selector-attribute-quotes': 'always',
    // 自动在注释边界添加空格
    'comment-whitespace-inside': ['always', { severity: 'warning' }],
  },
}
