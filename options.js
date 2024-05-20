import { isPackageExists } from 'local-pkg'

/**
 * @typedef {import('stylelint').default.Config} LintConfig
 */
/**
 * @typedef {import('./config').Config} Config
 */

/**
 * @typedef {NonNullable<LintConfig['overrides']>[number]} ConfigOverride
 */

/**
 * @typedef Options
 * @property {boolean} scss
 * @property {(Config | ConfigOverride)[]} configs
 */

/**
 * @typedef {Partial<Options>} UserOptions
 */

/**
 * @returns {Options['scss']}
 */
export function resolveScss() {
  return isPackageExists('sass') || isPackageExists('sass-embedded')
}

/**
 * @param {UserOptions} [options]
 * @returns {Options}
 */
export function resolveOptions(options = {}) {
  return {
    scss: options.scss ?? resolveScss(),
    configs: options.configs ?? [],
  }
}
