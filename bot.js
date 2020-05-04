const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require ("moment");
const prefix = "!";


  client.on('message', async message => {
  if(message.content.startsWith(prefix + "sugg")) {
  await  message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("669859185218813952").send(`${message.author.username}'s sug => ${text}`)

              })
            }
          })
 

client.login(process.env.BOT_TOKEN);
