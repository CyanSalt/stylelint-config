/**
 * @typedef {import('stylelint').default.Config} LintConfig
 */
/**
 * @typedef {import('./options').Options} Options
 */

/**
 * @typedef {NonNullable<LintConfig['overrides']>[number]} ConfigOverride
 */

/**
 * @typedef {(options: Options) => ConfigOverride | ConfigOverride[]} Config
 */

/**
 * @template {(options: Options) => ConfigOverride | ConfigOverride[]} T
 * @param {T} factory
 * @returns {T}
 */
export function defineConfig(factory) {
  return factory
}

/**
 * @param {Options} options
 * @param {(Config | ConfigOverride)[]} configs
 * @returns
 */
export function resolveConfigs(options, configs) {
  return [...configs, ...options.configs].flatMap(config => {
    return typeof config === 'function' ? config(options) : config
  })
}
