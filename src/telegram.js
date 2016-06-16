const TelegramBot = require('node-telegram-bot-api');
const glob = require('glob');
const path = require('path');

function parse(string) {
  let msg = string;
  msg = msg.split(' ');
  msg[0] = msg[0].split('@')[0].replace('/', '');
  return msg[0];
}

function loadCommands() {
  const commands = {};
  return new Promise(resolve => {
    glob(path.join(__dirname, 'commands', '*.js'), (err, files) => {
      files.forEach(file => {
        const basename = path.basename(file, '.js');
        // eslint-disable-next-line global-require
        const func = require(file);
        if (typeof(func) === 'function') {
          commands[basename] = func;
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
};
