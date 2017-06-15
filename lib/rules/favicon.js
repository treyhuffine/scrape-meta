
let isUrl = require('is-url')
let utils = require('../utils')

/**
 * Wrap a rule with validation and formatting logic.
 *
 * @param {Function} rule
 * @return {Function} wrapped
 */

function wrap(rule) {
  return ($, sourceUrl) => {
    let value = rule($)
    if (isUrl(value)) {
      return value;
    } else if (typeof value === 'string' && sourceUrl) {
      return utils.resolveImagePath(sourceUrl, value)
    }
    return
  }
}

/**
 * Rules.
 */
// CHECK SIZES AND GET LARGEST
module.exports = [
  wrap(($) => $('link[rel~="apple-touch-icon"]').first().attr('href')),
  wrap(($) => $('link[rel~="apple-touch-startup-image"]').first().attr('href')),
  wrap(($) => $('link[rel~="icon"]').first().attr('href')),
]
