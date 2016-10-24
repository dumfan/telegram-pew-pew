const parse = require('../helpers').parseArgs;
const request = require('request');

module.exports = {
  name: 'File fetcher', // max 20 chars
  info: '`/fetch url` to have the bot send you the file',
  func: (msg, done, bot) => {
    if (msg && msg.text) {
      const url = parse(msg.text)[0];
      if (!url) {
        return false;
      }
      bot.sendDocument(msg.chat.id, request(url));
    }
    return false;
  },
};
