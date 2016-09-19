const pirateSpeak = require('pirate-speak');
const parse = require('../helpers').parseArgs;

module.exports = {
  name: 'Yarrr!', // max 20 chars
  func: (msg) => {
    if (msg && msg.text) {
      const argString = parse(msg.text).join(' ');
      return pirateSpeak.translate(argString);
    }
    return false;
  },
};
