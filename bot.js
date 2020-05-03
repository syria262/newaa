const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"


client.on('message', msg => {   if (msg.content === '.') {     msg.reply('وعليكم السلام');} });

client.on('message', message => {   
     if (message.content === prefix+'ping') {
      const embed = new Discord.RichEmbed()
 
  .setColor("RANDOM")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
 

  message.channel.sendEmbed(embed);
    }
});


client.on('message',async message => { ///By KillerFox
    var room;
    var chat; 
    var duration;
    var gMembers;
    var filter = m => m.author.id === message.author.id;
    if(message.content.startsWith("$ac")) { ///By KillerFox
        //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**'); ///By KillerFox
        if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
        message.channel.send(`:eight_pointed_black_star:| **منشن الروم الذي تريد به ارسال الرساله**`).then(msgg => { ///By KillerFox
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
            }).then(collected => { ///By KillerFox
                let room = message.guild.channels.find('name', collected.first().content);
                if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**'); ///By KillerFox
                room = collected.first().content;
                collected.first().delete();
                        msgg.edit(':eight_pointed_black_star:| ** اكتب الرساله الي تبيها **').then(msg => { ///By KillerFox
                            message.channel.awaitMessages(filter, { ///By KillerFox
                                max: 1,
                                time: 20000,
                                errors: ['time'] ///By KillerFox
                            }).then(collected => {
                                chat = collected.first().content;
                                collected.first().delete();
                                try {
                                    let Embed = new Discord.RichEmbed()
                                        .setAuthor(message.guild.name, message.guild.iconURL)
                                        .setTitle(`Send By `+'``'+`${message.author.username}`+'``')
                                        .setDescription(chat)
                                        .setFooter(message.author.username, message.author.avatarURL);
                                    message.guild.channels.find('name', room).send(Embed).then(m => {
                                        let re = m.react('🎉');
                                        setTimeout(() => { ///By KillerFox
                                            let users = m.reactions.get("🎉").users;
                                            let list = users.array().filter(u => u.id !== m.author.id);
                                            let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                                            if(users.size === 1) gFilter = '**لم يتم التحديد**';
                                            let Embed = new Discord.RichEmbed()
                                                .setAuthor(message.author.username, message.author.avatarURL)
                                                .setTitle(chat)
                                                .addField(`ping`+`[${Date.now() - message.createdTimestamp}]`)
                                                .setFooter(message.guild.name, message.guild.iconURL);
                                            m.edit(Embed);
                                        },duration); ///By KillerFox
                                    });
                                    msgg.edit(`:heavy_check_mark:| تم ارسال الرساله في الروم`); ///By KillerFox
                                } catch(e) {
                                    msgg.edit(`:heavy_multiplication_x:| **لم اقدر على ارسال الرسالة**`); ///By KillerFox
                                    console.log(e);
                                }
                            });
                        });
                    });
                });
  }
});


client.login(process.env.BOT_TOKEN);
