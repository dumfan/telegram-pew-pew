import google from 'google';
import { parseArgs as parse } from '../helpers';
import log from '../log';

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

export default {
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
