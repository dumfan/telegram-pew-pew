const winston = require('winston');

if (process.env.NODE_ENV !== 'production') {
  winston.level = 'debug';
}

module.exports = winston;
