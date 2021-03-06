require('ramda').installTo(global);
var Promise = require('bluebird');
var spawn = require('child_process').spawn;
var argv = require('minimist')(process.argv.slice(2));
var readDirYAML = require('./lib/read-dir-yaml');
var spawnPM2 = require('./lib/spawn-pm2');
var path = require('path');

var pm2cmd   = argv._[0];
var appsPath = argv._[1];

if (argv._.length < 2) {
  console.log('Usage: pm2-yaml {start, stop, restart, delete} [dir with yaml]');
  process.exit(1);
}

var resolveAppCwd = curry(function(relativeDir, app) {
  return merge(app, {
    cwd: path.resolve(relativeDir, app.cwd)
  });
});

Promise.coroutine(function*() {
  var apps = yield readDirYAML(appsPath).map(resolveAppCwd(appsPath));
  var pm2 = spawnPM2(pm2cmd, JSON.stringify(apps));
  pm2.on('exit', process.exit);
})();
