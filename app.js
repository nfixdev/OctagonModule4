const telegrambot = require('node-telegram-bot-api');

const token = '6802319674:AAG3mBMojhnyMZfMZ940IAqo2cnCm7w90bI';

const bot = new telegrambot(token, {polling: true});

bot.onText(/\/start/, (msg)=>{
    const chatid = msg.chat.id;
    bot.sendMessage(chatid, 'Привет, Октагон!');
});