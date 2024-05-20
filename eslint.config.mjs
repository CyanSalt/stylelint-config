import config from '@cyansalt/eslint-config'

export default config({
  configs: [
    {
      rules: {
        'galaxy/import-extensions': ['warn', {
          '.js': 'always',
        }],
      },
    },
  ],
})
