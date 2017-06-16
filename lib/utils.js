const urlObject = require('url');
const utils = {}

utils.resolveImagePath = function(url, src) {
  const updatedUrl = urlObject.resolve(url, src);

  return updatedUrl;
}

utils.getContentType = function(headers) {
  let contentType = '';

  Object.keys(headers).forEach((key) => {
    const header = headers[key]

    if (typeof key === 'string' && key.toLowerCase() === 'content-type') {
      contentType = header
    }
  })

  return contentType
}

module.exports = utils;
