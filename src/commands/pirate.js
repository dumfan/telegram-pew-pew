import pirateSpeak from 'pirate-speak';
import { parseArgs as parse } from '../helpers';

export default {
  name: 'Yarrr!', // max 20 chars
  func: (msg) => {
    if (msg && msg.text) {
      const argString = parse(msg.text).join(' ');
      return pirateSpeak.translate(argString);
    }
    return false;
  },
};
