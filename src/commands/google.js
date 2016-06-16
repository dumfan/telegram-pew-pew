const parse = require('../helpers').parseArgs;
const log = require('../log');
const google = require('google');

const googleSearch = (query, callback) => {
  google(query, (err, res) => {
    if (err) {
      log.debug('Something went wrong?');
    }
    const links = res.links;

    if (links && links.length) {
      const filtered = links.filter((link) => link.href !== null);
      const link = filtered[0];
      if (link.href) {
        callback(link.href);
      }
    }
  });
};

module.exports = {
  name: 'Google Search', // max 20 chars
  info: '`/google searchstring` to get the first result',
  func: (msg, done) => {
    if (msg && msg.text) {
      const argString = parse(msg.text).join(' ');
      googleSearch(argString, done);
    } else {
      return false;
    }
  },
};
