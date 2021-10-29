const groups = require('./groups')

module.exports = {
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'order/order': [
      [
        {
          type: 'at-rule',
          name: 'use',
        },
        {
          type: 'at-rule',
          name: 'import',
        },
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          hasBlock: true,
        },
        {
          type: 'at-rule',
          name: 'return',
        },
        'rules',
      ],
      { severity: 'warning' },
    ],
    'order/properties-order': [
      [
        'composes', // CSS Modules
        'appearance',
        ...groups.content,
        ...groups.positioning,
        ...groups.box,
        ...groups.typography,
        ...groups.visualization,
        ...groups.transform,
        ...groups.animation,
        ...groups.interaction,
      ],
      {
        unspecified: 'bottom',
        severity: 'warning',
      },
    ],
  },
}
