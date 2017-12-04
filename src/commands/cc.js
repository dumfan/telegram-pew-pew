import fetch from 'node-fetch';
import { parseArgs as parse } from '../helpers';

const convert = async (currency = 'bitcoin', _quantity = 1) => {
  const quantity = parseFloat(_quantity, 10);
  const url = `https://api.coinmarketcap.com/v1/ticker/${currency}`;
  const json = await fetch(url).then(res => res.json());
  const sum = quantity * parseFloat(json[0].price_usd, 10);
  return `${quantity} ${json[0].symbol} is worth ${sum.toFixed(2)} USD`;
};

export default {
  name: 'Cryptocurrency', // max 20 chars
  info: 'Data from http://fixer.io/',
  func: (msg, done) => {
    if (msg && msg.text) {
      const args = parse(msg.text);
      return convert(args[0], args[1]).then(done);
    }
    return;
  },
};
