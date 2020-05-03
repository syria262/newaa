const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"

client.on('message', async msg => {
    var user = msg.author;
        if (msg.content === (prefix +'help')) {
        if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
        
msg.channel.send({embed: new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
           .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
  .setURL('')
 .setDescription(`
**Public** 🌏
**Admin**🔧
**Other**💥 
**Cancel **❌**`)
 
 .setTimestamp()
}).then(zg => {
     zg.react('🌏').then(r=>{
     zg.react('🔧').then(r=>{
     zg.react('💥').then(r=>{
     zg.react('❌').then(r=>{
 var ppp = (reaction, user) => reaction.emoji.name === '🌏' && user.id === msg.author.id;
   var aaa = (reaction, user) => reaction.emoji.name === '🔧' && user.id === msg.author.id;
    var ooo = (reaction, user) => reaction.emoji.name === '💥' && user.id === msg.author.id;
    var ccc = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
 
    var pp = zg.createReactionCollector(ppp, { maxMatches:1 , time: 60000 , });
    var aa = zg.createReactionCollector(aaa, { maxMatches:1 , time: 60000 , });
    var vv = zg.createReactionCollector(vvv, { maxMatches:1 , time: 60000 , });
    var oo = zg.createReactionCollector(ooo, { maxMatches:1 , time: 60000 , });
 
pp.on("collect", r => {
    zg.edit({embed: new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
          .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
  .setURL('')
.setDescription(`** public ** `)
 .setTimestamp()
    });
 
 
    })
aa.on("collect", r => {
    zg.edit({embed: new Discord.RichEmbed()
 .setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
           .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
.setURL('')
.setDescription(`** admin ** `)
.setTimestamp()
    });
    })
oo.on("collect", r => {
    zg.edit({embed: new Discord.RichEmbed ()
.setAuthor(client.user.username , client.user.avatarURL)
 .setThumbnail(msg.author.avatarURL)
 .setTitle(`Welcome To ${msg.guild.name}`)
           .setFooter(`- Requested By: ${msg.author.tag}`,msg.author.avatarURL)
  .setURL('')
.setDescription(`** other ** `)
 
 .setTimestamp()
    });
 
})
cc.on("collect", r => {
    zg.delete();
    msg.delete();
})
     }).then(msg => msg.delete(15000));
     })
     })
     })
})
     }
     });


client.login(process.env.BOT_TOKEN);
