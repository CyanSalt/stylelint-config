const groups = require('./groups')

module.exports = {
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          hasBlock: true,
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
