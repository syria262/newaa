const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"
client.on('ready', () => {
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('[           BOT IS ONLINE         ]') 
});

client.login("Your Bot Token");
