'use strict';
var hash = require('hash-string');

module.exports = function shortHash(str, base) {
  return hash(str).toString(base || 16);
};
