const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require ("moment");
const prefix = "!";

client.on("message", message => {
if (message.content.startsWith("!ranks")) {
let auto = new Discord.RichEmbed()
.setDescription(`
في خمسة رتب في السيرفر 
 لمعرفة سعر وخواص الرتب اكتب 
GOLD :  !GOLDshow
FIRE :  !FIREshow
VIP :  !VIPshow
D-FIRE :  !D-FIREshow
D-VIP :  !D-VIPshow
`)
.setColor("FFFF00")
message.channel.send(auto)
}})

client.on("message", message => {
if (message.content.startsWith("!GOLDshow")) {
let auto = new Discord.RichEmbed()
.setDescription(`
سعر الرتبة :
GOLD : 15$ - 25 ASIA - 40 SAWA
خواص الرتبة :
https://media.discordapp.net/attachments/696162225542660146/706931605070938232/2020-05-04_21.10.05.png?width=806&height=428
`)
.setColor("FFFF00")
message.channel.send(auto)
}})

client.on("message", message => {
if (message.content.startsWith("!FIREshow")) {
let auto = new Discord.RichEmbed()
.setDescription(`
سعر الرتبة :
FIRE : 10$ - 15 ASIA - 30 SAWA
خواص الرتبة :
https://media.discordapp.net/attachments/696162225542660146/706931836852633630/2020-05-04_21.10.02.png?width=806&height=428
`)
.setColor("FFFF00")
message.channel.send(auto)
}})

client.on("message", message => {
if (message.content.startsWith("!VIPshow")) {
let auto = new Discord.RichEmbed()
.setDescription(`
سعر الرتبة :
VIP : 5 - 10 ASIA - 20 SAWA
خواص الرتبة :
https://media.discordapp.net/attachments/696162225542660146/706932754255970394/2020-05-04_21.10.08.png?width=806&height=428
`)
.setColor("FFFF00")
message.channel.send(auto)
}})

client.on("message", message => {
if (message.content.startsWith("!D-FIREshow")) {
let auto = new Discord.RichEmbed()
.setDescription(`
سعر الرتبة :
D-FIRE : 50K CREDIT
خواص الرتبة :
https://media.discordapp.net/attachments/696162225542660146/706931932797337620/2020-05-04_21.09.55.png?width=806&height=428
`)
.setColor("FFFF00")
message.channel.send(auto)
}})

client.on("message", message => {
if (message.content.startsWith("!D-VIPshow")) {
let auto = new Discord.RichEmbed()
.setDescription(`
سعر الرتبة :
D-FIRE : 20K CREDIT
خواص الرتبة :
https://media.discordapp.net/attachments/696162225542660146/706932909419790346/2020-05-04_21.10.10.png?width=806&height=428
`)
.setColor("FFFF00")
message.channel.send(auto)
}})


client.login(process.env.BOT_TOKEN);
