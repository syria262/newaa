const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require ("moment");
const prefix = "!";

client.on('message', message => {
  if (message.author.bot) return;

  let args = message.content.split(" ");
  
  let command = args[0];
  
  let messagecount = args[1];
  
    if(command == prefix + "clear") {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
		message.channel.send("يجب ان تمتلك خاصية `MANAGE_MESSAGES` ")
	} else if (!messagecount) {
		message.channel.send("**قم بكتابة عدد الرسائل المراد حذفها**")
	}else {
		message.channel.bulkDelete(messagecount);
        message.channel.send("**رسالة " + messagecount + " لقد تم حذف**").then(mes => 
		mes.delete(3000)
		);    
	 }
   }
  // By Alpha Codes - AboKhalil 26/7/2019
});
client.login(process.env.BOT_TOKEN);
