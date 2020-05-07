const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require ("moment");
const prefix = "!";


client.on("message", async message =>{
// By Alpha Codes - AboKhalil 27/7/2019
    var args = message.content.split(" ");
    var command = args[0];
    let user = message.guild.member(message.mentions.users.first());
    var timemute = args[2];
    var reasonmute = message.content.split(" ").slice(3).join(" ");
    let muteres;
    let muterole = message.guild.roles.find(`name`, "Muted");
    if (command === prefix + "mute") {
        // By Alpha Codes - AboKhalil 27/7/2019
        if (!message.channel.guild){
            message.channel.send("هذا الأمر للسيرفرات فقط !");
        }else if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("يجب ان تمتلك خاصية `MANAGE_MESSAGES` ");
        }else if (!user){
            message.channel.send("يجب عليك اختيار شخص اولا !");
        } else if (!timemute){
                    message.channel.send(`**
        يجب عليك اختيار وقت الإسكات
        15m اسكات ربع ساعه
        30m اسكات نصف ساعه
        1h اسكات ساعه
        3h اسكاات ثلاث ساعات
        1d اسكات يوم كامل
        3d اسكات ثلاث ايام
        1w اسكات اسبوع
        1mon اسكات شهر
        **`);
        }else if (!reasonmute){
            message.channel.send("لم تقم بكتابة سبب !");
        } else {
            // By Alpha Codes - AboKhalil 27/7/2019
          var timefilter;
        if (timemute = "15m") {
            timefilter = 900000;
        } else if (timemute = "30m") {
            timefilter = 1800000;
        } else if (timemute = "1h") {
            timefilter = 3600000;
        } else if (timemute = "3h") {
            timefilter = 10800000‬;
        } else if (timemute = "1d") {
            timefilter = 86400000;
        } else if (timemute = "3d") {
            timefilter = 259200000;
        } else if (timemute = "1w") {
            timefilter = ‭604800000‬;
        } else if (timemute = "1mon"){
            timefilter = 2592000000‬;
        }
   
        muteres = reasonmute;
        message.channel.send("<@" + user.id + "> **Member Was Muted By :**<@" + message.author.id + ">");
        message.channel.send("**Reason : **" + muteres);
        user.addRole(muterole);
                setTimeout(() => {
 
        user.removeRole(muterole);
 
        }, timefilter);
    }
}// By Alpha Codes - AboKhalil 27/7/2019
    if (command === prefix + "unmute") {
        if (!message.channel.guild){
            message.channel.send("هذا الأمر للسيرفرات فقط !");
        } else if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("يجب ان تمتلك خاصية `MANAGE_MESSAGES` ");
        }else if (!user){
            message.channel.send("يجب عليك اختيار شخص اولا !");
        } else  {
   
        message.channel.send("<@" + user.id + "> ** Was UnMuted By :**<@" + message.author.id + ">");
        user.removeRole(muterole);
    }
  } // By Alpha Codes - AboKhalil 27/7/2019
});

client.login(process.env.BOT_TOKEN);
