
const TelegramBot = require('node-telegram-bot-api');
const token = '946344082:AAHTkMh5c1o0UOesKZRMZ5uJDAiwYbXU_eE';
const bot = new TelegramBot(token, {polling: true});
//const url = 'http://api.openweathermap.org/data/2.5/find?q=Kiev&type=like&APPID=bb7bb415a2bc3847616afb5a120f94a8';




bot.onText(/\/start/, (msg, match) => {
     chatId = msg.chat.id;
    
      bot.sendMessage(chatId,chatId) ;



});
token.onText(/\/s/, (msg, match) => {
bot.sendPhoto({
    chat_id: <YOUR CHAT ID>,
    caption: 'This is my test image',

    // you can also send file_id here as string (as described in telegram bot api documentation)
    photo: 'https://eimg.pravda.com/images/doc/8/f/8f27edc-blackhole-ep.jpg'
})
.then(function(data)
{
    console.log(util.inspect(data, false, null));
});
});