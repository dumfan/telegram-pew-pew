const winston = require('winston');
const Sentry = require('winston-sentry');

const level = (process.env.NODE_ENV === 'production') ? 'info' : 'debug';

if (process.env.NODE_ENV !== 'production') {
  winston.level = 'debug';
}

const transports = [
  new winston.transports.Console({ level }),
];

if (process.env.SENTRY_TOKEN) {
  console.log('Sentry loaded'); // eslint-disable-line no-console
  const sentry = new Sentry({
    level: 'info',
    dsn: process.env.SENTRY_TOKEN,
    tags: { key: 'value' },
    extra: { key: 'value' },
  });
  transports.push(sentry);
}

const logger = new winston.Logger({
  transports,
});

logger.info('Logger init');

module.exports = logger;
