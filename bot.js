const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require ("moment");
const prefix = "!";

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
       if (message.content.startsWith(prefix + "avatar")) {
           var mentionned = message.mentions.users.first();
           message.channel.send(·تفضل رابط الصورة الي طلبتها  : `);
    var MsH;
      if(mentionned){
          var MsH = mentionned;
      } else {
          var MsH = message.author;
         
      }
          message.channel.send(MsH.avatarURL);
      }
         
});

client.login(process.env.BOT_TOKEN);
