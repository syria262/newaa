const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require ("moment");
const prefix = "!";

client.on('message', message => {  
    if (message.author.bot) return; 
    if (message.content.startsWith(prefix + 'clear')) { 
    if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`** You don't have Premissions!**`);
     if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`**I don't have Permission!**`);
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply(`** The number can't be more than **100** .**`).then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)).then(msgs => {
    message.channel.send(`** Done , Deleted `${msgs.size}` messages.**`).then(messages => messages.delete(5000));
    })
  }
});

client.on('message', MEOW => {
  if(MEOW.content.startsWith("!roll")){
    MEOW.channel.send(Math.floor(Math.random))
  }
});


client.login(process.env.BOT_TOKEN);
