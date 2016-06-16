const { parse, parseArgs, loadCommands, bot } = require('./telegram');

function createDone(chatId) {
  return function (string) {
    bot.sendMessage(chatId, string);
  };
}

loadCommands().then(commands => {
  bot.on('message', (obj) => {
    const msg = obj;
    const cmd = parse(msg.text);
    msg.args = parseArgs(msg.text);
    if (commands[cmd]) {
      const done = createDone(msg.chat.id);
      const result = commands[cmd].func(msg, done);
      if (result) {
        bot.sendMessage(msg.chat.id, result);
      }
    }
  });
});
