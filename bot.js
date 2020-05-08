const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require ("moment");
const prefix = "!";

client.on("message", message => {
if (message.content.startsWith("!ip")) {
let auto = new Discord.RichEmbed()
.setDescription(``تفضل اي بي ال سيرفر : `51.38.84.69:25615`)
.setColor("FF9900")
message.channel.send(auto)
}})
  
client.login(process.env.BOT_TOKEN);
