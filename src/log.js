import winston from 'winston';

const level = (process.env.NODE_ENV === 'production') ? 'info' : 'debug';

if (process.env.NODE_ENV !== 'production') {
  winston.level = 'debug';
}

const transports = [
  new winston.transports.Console({ level }),
];

const logger = new winston.Logger({
  transports,
});

logger.info('Logger init');

export default logger;
