import { resolveConfigs } from './config.js'
import aurora from './configs/aurora.js'
import css from './configs/css.js'
import order from './configs/order.js'
import scss from './configs/scss.js'
import stylistic from './configs/stylistic.js'
import vue from './configs/vue.js'
import { resolveOptions } from './options.js'

/**
 * @typedef {import('./options').UserOptions} UserOptions
 */

/**
 * @param {UserOptions} [userOptions]
 */
function config(userOptions = {}) {
  const options = resolveOptions(userOptions)
  if (process.env.DEBUG) {
    console.debug('[@cyansalt/stylelint-config]', options)
  }
  return resolveConfigs(options, [
    css,
    stylistic,
    order,
    scss,
    vue,
    aurora,
  ])
}

export default config
