const helg = require('helg');

module.exports = {
  name: 'Äre ens helg?', // max 20 chars
  func: () => (helg.ere() ? 'd e d!' : 'ne'),
};
