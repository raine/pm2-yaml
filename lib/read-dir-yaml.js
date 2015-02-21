var Promise = require('bluebird');
var recursive = Promise.promisify(require('recursive-readdir'));
var fs = Promise.promisifyAll(require('fs'));
var readFile = curry(flip(fs.readFileSync));
var yaml = require('js-yaml');
var minimatch = require('minimatch');

module.exports = function(path) {
  return recursive(path)
    .filter(minimatch.filter('*.y{a,}ml', {
      matchBase: true
    }))
    .map(readFile('utf8'))
    .map(unary(yaml.safeLoad));
};
