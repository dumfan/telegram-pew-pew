const parse = require('../helpers').parseArgs;
const fetch = require('node-fetch');

const convert = (amountString, _from = 'EUR', _to = 'SEK') => {
  const to = _to.toUpperCase();
  const from = _from.toUpperCase();
  const amount = parseInt(amountString, 10);
  const url = `http://api.fixer.io/latest?base=${from}&symbols=${to}`;
  return fetch(url).then(res => res.json()).then(json => {
    const res = amount * json.rates[to];
    return `${amount} ${from} is worth about ${res} ${to}`;
  });
};

module.exports = {
  name: 'Dr Currency bitches', // max 20 chars
  info: 'Data from http://fixer.io/',
  func: (msg, done) => {
    if (msg && msg.text) {
      const args = parse(msg.text);
      if (!args[0]) {
        done('Missing arguments. /cur amount <from:EUR> <to:SEK>');
        return;
      }
      return convert(args[0], args[1], args[2]).then(done);
    }
    return;
  },
};
