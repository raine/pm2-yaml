var spawn = require('child_process').spawn;

module.exports = function(cmd, stdin) {
  var pm2 = spawn('pm2', [cmd, '-'], {
    stdio: [ 'pipe', process.stdout, process.stderr ]
  });
  pm2.stdin.write(stdin);
  return pm2;
};
