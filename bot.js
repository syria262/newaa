const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#"
client.on('ready', () => {
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('[           BOT IS ONLINE         ]') 
});

client.on('message', msg => {   if (msg.content === 'السلام عليكم') {     msg.reply('وعليكم السلام');   } });

client.login(process.env.BOT_TOKEN);
