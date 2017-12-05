import fetch from 'node-fetch';

const convert = async (currency = 'bitcoin', _quantity = 1) => {
  const quantity = parseFloat(_quantity, 10);
  const url = `https://api.coinmarketcap.com/v1/ticker/${currency}`;
  const json = await fetch(url).then(res => res.json());
  const sum = quantity * parseFloat(json[0].price_usd, 10);
  return `${quantity} ${json[0].symbol} is worth ${sum.toFixed(2)} USD`;
};

export default {
  name: 'Cryptocurrency',
  info: 'Data from http://coinmarketcap.com/',
  func: (msg, done) => {
    if (msg && msg.text) {
      return convert(msg.args[0], msg.args[1]).then(done);
    }
    return;
  },
};
