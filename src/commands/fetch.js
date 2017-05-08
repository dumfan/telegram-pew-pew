import request from 'request';
import { parseArgs as parse } from '../helpers';

export default {
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
