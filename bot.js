const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require ("moment");
const prefix = "!";

client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { 
    let pages = [`
الاوامــر الــعـــامـــة
--> !ping = لمعرفه سرعه البوت
--> !server = معلومات عن السيرفر
--> !id = لمعرفة معلومات حسابك
--> !avatar ⥨ لاعطائك صورة الشخص اللي منشنته مع الرابط
--> !link = يعطيك رابط انفايت للسيرفر اللي انت فيه
--> !rules = لمعرفة قوانين السيرفر
--> !ranks  رتب ماين كرافت
--> !ip لمعرفة اي بي سيرفرنا ماين كرافت
--> !sugg لأضافة اقتراح للديسكورد
--> !suggMine لأضافة اقتراح لسيرفرنا ماين كرافت
  `
,`
        ***__Admin orders__***
**
--> !clear = لحذف الشات 
--> !mc = لقفل الشات 
--> !unmc = لفتح الشات 
--> !giveaway = لعمل جيف اواي
--> !bc = لارسال رسالة لجميع اعضاء السيرفر 
--> !kick = لطرد شخص من السيرفر 
--> !ban = لاعطاء شخص باند من السيرفر 
--> !ct = لانشاء روم كتابي 
--> !cv = لانشاء روم صوتي
**
  `
,`
        ***__Games orders__***
**
--> لعبة صراحة / صراحة 
--> لعبة كت تويت / كت تويت
--> لعبة عقاب / عقاب
**
   
`]
    let page = 1;
 
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])
 
    message.channel.sendEmbed(embed).then(msg => {
 
        msg.react('◀').then( r => {
            msg.react('▶')
 
 
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
 
 
        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
 
 
 
        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
     
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});

client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`عرض معلومات سيرفر  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + 'ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**الوقت المستغرق:**',msg + " ms 📶 ")
                        .addField('**سرعة اتصال البوت:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
   });

client.on('message' , message => {
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
 if(message.content.split(' ')[0].toLowerCase() == prefix + 'id') {
     const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
    if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
    let user = message.mentions.users.first() || message.author;
    message.delete();
   
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }

    let game;
    if (user.presence.game === null) {
        game = 'None.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'None.';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = 'Online';
    } else if (user.presence.status === 'dnd') {
        status = 'DND';
    } else if (user.presence.status === 'idle') {
        status = 'Idle';
    } else if (user.presence.status === 'offline') {
        status = 'Offline';
    }
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
    moment.locale('En-ly');
                    message.guild.fetchInvites().then(invs => {
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let Invites = invs.filter(i => i.inviter.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    const embed = new Discord.RichEmbed()

  
  .addField('معلوماتك في الديسكورد  : ', `اسمك: ${user.username}\n تاقك: #${user.discriminator}\nايديك : ${user.id} \nدخولك للديسكورد من : ${moment(heg.createdTimestamp).fromNow()}\nوضعك : ${status}`,true)
  .addField('معلوماتك في السيرفر :', `دخولك للسيرفر من :  ${moment(h.joinedAt).fromNow()} \n عدد دعواتك :  ${inviteCount} Invite(s) \nرتبك : `+message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(', '))
  .setAuthor(`${user.username}`, user.displayAvatarURL)
  .setColor('RANDOM')
    .setThumbnail(user.displayAvatarURL)
    message.channel.send({embed})
  .catch(e => logger.error(e));
 })
}
 }); 

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
       if (message.content.startsWith(prefix + "avatar")) {
           var mentionned = message.mentions.users.first();
           message.channel.send(`ً ${message.author} avatar URL : `);
    var MsH;
      if(mentionned){
          var MsH = mentionned;
      } else {
          var MsH = message.author;
         
      }
          message.channel.send(MsH.avatarURL);
      }
         
});

client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});

client.on('message', message => {

    if (message.content === "!mc") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('  تبي ميوت صح ؟  ');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("لقد تم تقفيل الشات ✅ ")
           });
             }
if (message.content === "!unmc") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('تبي ميوت صح ؟');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("لقد تم فتح الشات✅")
           });
             }



});

client.on('message', message => {
if (message.content.startsWith(prefix+"ct")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`, 'text')
      }
});

client.on('message', message => {
if (message.content.startsWith(prefix+"cv")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`,'voice')
          
        }
});



client.login(process.env.BOT_TOKEN);
