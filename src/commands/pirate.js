import pirateSpeak from 'pirate-speak';

export default {
  name: 'Yarrr!', // max 20 chars
  func: (msg) => {
    if (msg && msg.text) {
      const argString = msg.args.join(' ');
      return pirateSpeak.translate(argString);
    }
    return false;
  },
};
