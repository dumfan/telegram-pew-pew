const { parse, loadCommands, bot } = require('./telegram');
const log = require('./log');

loadCommands().then(commands => {
  bot.on('message', (msg) => {
    log.debug(msg);
    const chatId = msg.chat.id;
    const cmd = parse(msg.text);
    if (commands[cmd]) {
      bot.sendMessage(chatId, commands[cmd](msg));
    }
  });
});
