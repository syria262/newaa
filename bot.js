const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"


client.on('message', msg => {   if (msg.content === '.') {     msg.reply('وعليكم السلام');   } });


client.on("message", m => {
  if (m.content === "help") {
    let Dashboard = "رابط موقع البوت";
    var addserver ="رابط اضافت البوت ";
    var SUPPORT = "رابط سيرفر البوت هنا";
    let embed = new Discord.RichEmbed().setTitle(`Helpful Links`)
      .setDescription(`                                                                                                               
**[Add To Your Server ](${addserver})**    
**[Dashboard](${Dashboard})**
**[ Server Support](${SUPPORT})**`);
    m.react("✅");
    m.author.send(embed);
  }
});


client.login(process.env.BOT_TOKEN);
