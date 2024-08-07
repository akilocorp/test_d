const { Telegraf } = require("telegraf");
const TOKEN = "7261785692:AAFdPiyihYBjZzfxGzTTZCCvefmq-CoPKfU";
const bot = new Telegraf(TOKEN);

const web_link = "https://vocal-brioche-a5c70c.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
