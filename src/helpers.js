const glob = require('glob');
const path = require('path');

function parse(msg) {
  return msg.split(' ')[0].split('@')[0].replace('/', '');
}

function parseArgs(msg) {
  if (!msg || msg === '') {
    return [];
  }
  const args = msg.split(' ');
  args.shift();
  return args;
}

function loadCommands() {
  const commands = {};
  return new Promise(resolve => {
    glob(path.join(__dirname, 'commands', '*.js'), (err, files) => {
      files.forEach(file => {
        const basename = path.basename(file, '.js');
        // eslint-disable-next-line global-require
        const obj = require(file);
        if (typeof(obj.func) === 'function') {
          commands[basename] = obj;
        }
      });
      resolve(commands);
    });
  });
}

module.exports = {
  parse, parseArgs, loadCommands,
};
