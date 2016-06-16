const TelegramBot = require('node-telegram-bot-api');

module.exports = {
  bot: new TelegramBot(process.env.TELEGRAM_TOKEN, {
    polling: true,
  }),
};
