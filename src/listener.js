import { bot } from './telegram';
import { getCommand, parseArgs } from './helpers';
import log from './log';

const createDone = chatId => string => bot.sendMessage(chatId, string);

const listen = (commands) => {
  bot.on('message', (_msg) => {
    log.info('Got message', _msg);
    if (_msg.text) {
      const msg = _msg;
      const command = commands[getCommand(msg.text)];
      msg.args = parseArgs(msg.text);
      if (command) {
        const done = createDone(msg.chat.id);
        const result = command.func(msg, done, bot);
        if (result) {
          done(result);
        }
      }
    }
  });
};

export default listen;
