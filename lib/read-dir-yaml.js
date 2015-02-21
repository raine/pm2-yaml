var Promise = require('bluebird');
var recursive = Promise.promisify(require('recursive-readdir'));
var fs = Promise.promisifyAll(require('fs'));
var readFile = curry(flip(fs.readFileSync));
var yaml = require('js-yaml');

module.exports = function(path) {
  return recursive(path)
    .map(readFile('utf8'))
    .map(unary(yaml.safeLoad));
};
