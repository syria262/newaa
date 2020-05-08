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

client.login(process.env.BOT_TOKEN);
