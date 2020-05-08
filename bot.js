const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require ("moment");
const prefix = "!";

client.on("message", message => {
if (message.content.startsWith("!rules")) {
let auto = new Discord.RichEmbed()
.setDescription(`**قوانين السيرفر :
1-الي يستخدم اي نوع من الهاك او الاكس راي او الجلتش باند ايبي 14 يوم
2-الشخص الي ينسرق ما النا اي دخل فيه في فيديو شرح عن السيرفر #⭐-goldcraft-⭐ 
3-اي نوع من السب حتى لو بالمزح بان ايبي يومين 
4-اي استفسار بشان اضافة او حذف شغلة احكي مع @■ψ KING ψ■ @♛-Owner-♛ 

قوانين الديسكورد:
1-السب وتقليل الاحترام بان لمدة اسبوع
2-عدم طلب اي رتبة عليها ميوت
3-عدم التكلم بشات ال #🎃-commands-🎃 #🎵command-music🎵**
`)
.setColor("FFFF00")
message.channel.send(auto)
}})

client.login(process.env.BOT_TOKEN);
