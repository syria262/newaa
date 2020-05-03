const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"

client.on('message', message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "help")) {
    let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setAuthor(client.user.tag,client.user.avatarURL)
    .setDescription(`Please Chose
🔴Help in channel
🔵Help in privte
`)
  message.channel.send(embed).then(async msg => {
      msg.react("🔴")
      msg.react("🔵")
      
 const doma= msg.createReactionCollector((reaction, user) => reaction.emoji.name == "🔴" && user.id == message.author.id, {time: 86400000})
 const domaa = msg.createReactionCollector((reaction, user) => reaction.emoji.name == "🔵" && user.id == message.author.id, {time: 86400000})
 
 doma.on("collect",async r => {
   await r.remove(message.author)
   let embe = new Discord.RichEmbed()
   .setColor("BLACK")
   .setAuthor(client.user.tag,client.user.avatarURL)
.setDescription(`الرساله `)
   msg.edit(embe)
 })
      domaa.on("collect", async r => {
      await r.remove(message.author)
        let embe = new Discord.RichEmbed()
        .setColor("BLACK")
        .setAuthor(client.user.tag,client.user.avatarURL)
        .setDescription(`الرساله `)
      message.author.send(embe)
      })
    })
    }
})

client.login(process.env.BOT_TOKEN);
