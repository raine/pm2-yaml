require('ramda').installTo(global);
var Promise = require('bluebird');
var spawn = require('child_process').spawn;
var argv = require('minimist')(process.argv.slice(2));
var readDirYAML = require('./lib/read-dir-yaml');
var spawnPM2 = require('./lib/spawn-pm2');

var appsPath = argv._[0];
var pm2cmd   = argv._[1];

if (argv._.length < 2) {
  console.log('Usage: pm2-yaml [dir with yaml] {start, stop, restart, delete}');
  process.exit(1);
}

Promise.coroutine(function*() {
  var apps = yield readDirYAML(appsPath);
  var pm2 = spawnPM2(pm2cmd, JSON.stringify(apps));
  pm2.on('exit', process.exit);
})();
