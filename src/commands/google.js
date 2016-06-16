const parse = require('../telegram').parseArgs;
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
  name: 'Google search', // max 20 chars
  func: (msg, done) => {
    if (msg && msg.text) {
      const argString = parse(msg.text).join(' ');
      googleSearch(argString, done);
    } else {
      return false;
    }
  },
};
