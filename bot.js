const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"


client.on('message', msg => {   if (msg.content === '.') {     msg.reply('وعليكم السلام');} });

client.on('message', message => {   
     if (message.content === prefix+'ping') {
      const embed = new Discord.RichEmbed()
 
  .setColor("RANDOM")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
 

  message.channel.sendEmbed(embed);
    }
});

client.login(process.env.BOT_TOKEN);
