import helg from 'helg';

export default {
  name: 'Äre ens helg?', // max 20 chars
  func: () => (helg.ere() ? 'd e d!' : 'ne'),
};
