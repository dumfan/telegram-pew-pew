const TelegramBot = require('node-telegram-bot-api');
const glob = require('glob');
const path = require('path');

function parse(msg) {
  return msg.split(' ')[0].split('@')[0].replace('/', '');
}

function parseArgs(msg) {
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
  bot: new TelegramBot(process.env.TELEGRAM_TOKEN, {
    polling: true,
  }),
  loadCommands,
  parse,
  parseArgs,
};
