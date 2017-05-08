const TelegramBot = require('node-telegram-bot-api');

export const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {
  polling: true,
});
