const urlObject = require('url');
const utils = {}

utils.resolveImagePath = function(url, src) {
  const updatedUrl = urlObject.resolve(url, src);

  return updatedUrl;
}

module.exports = utils;
