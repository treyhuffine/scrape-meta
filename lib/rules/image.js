
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

module.exports = [
  wrap(($) => $('meta[property="og:image:secure_url"]').attr('content')),
  wrap(($) => $('meta[property="og:image:url"]').attr('content')),
  wrap(($) => $('meta[property="og:image"]').attr('content')),
  wrap(($) => $('meta[name="twitter:image"]').attr('content')),
  wrap(($) => $('meta[property="twitter:image"]').attr('content')),
  wrap(($) => $('meta[name="twitter:image:src"]').attr('content')),
  wrap(($) => $('meta[property="twitter:image:src"]').attr('content')),
  wrap(($) => $('meta[name="sailthru.image"]').attr('content')),
  wrap(($) => $('meta[name="sailthru.image.full"]').attr('content')),
  wrap(($) => $('meta[name="sailthru.image.thumb"]').attr('content')),
  wrap(($) => $('article img[src]').first().attr('src')),
  wrap(($) => $('#content img[src]').first().attr('src')),
  wrap(($) => $('[class*="article"] img[src]').first().attr('src')),
  wrap(($) => $('img[src]').first().attr('src')),
]
