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
--> رابط = يعطيك رابط انفايت للسيرفر اللي انت فيه
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


const Za7f = [
    "**صورة وجهك او رجلك او خشمك او يدك**.",
    "**اصدر اي صوت يطلبه منك الاعبين**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
    "**قول نكتة اذا و ��ازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**صور اي شيء يطلبه منك الاعبين**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**سو مشهد تمثيلي عن مصرية بتولد**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
    "**اتصل على امك و قول لها انك تحبها :heart:**.",
    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
    "**قل لواحد ماتعرفه عطني كف**.",
    "**منشن الجميع وقل انا اكرهكم**.",
    "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
    "**روح المطبخ و اكسر صحن او كوب**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت ا��كف**.",
    "**قول لاي بنت موجود في الروم كلمة حلوه**.",
    "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
    "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
    "**قول قصيدة **.",
    "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**اول واحد تشوفه عطه كف**.",
    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
    "**تاخذ عقابين**.",
    "**قول اسم امك افتخر بأسم امك**.",
    "**ار��ي اي شيء قدامك على اي احد موجود او على نفسك**.",
    "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
    "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
    "**تتصل على الوالده  و تقول لها خطفت شخص**.",
    "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
    "**����تصل على الوالده  و تقول لها  احب وحده**.",
      "**تتصل على شرطي تقول له عندكم مطافي**.",
      "**خلاص سامحتك**.",
      "** تصيح في الشارع انا  مجنوون**.",
      "** تروح عند شخص تقول له احبك**.",
  
]

 client.on('message', message => {
   if (message.content.startsWith('عقاب')) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('عقاب' ,
  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[38ab] Send By: ' + message.author.username)
    }
});

 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith("كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith('صراحة')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()
 
  message.channel.sendEmbed(client);
  message.react("??")
}
});

client.on("message", message => {
if (message.content.startsWith("!ip")) {
let auto = new Discord.RichEmbed()
.setDescription(`تفضل اي بي ال سيرفر : 51.38.84.69:25615`)
.setColor("FFFF00")
message.channel.send(auto)
}})

client.on("message", message => {
if (message.content.startsWith("!rules")) {
let auto = new Discord.RichEmbed()
.setDescription(`قوانين السيرفر :
1-الي يستخدم اي نوع من الهاك او الاكس راي او الجلتش باند ايبي 14 يوم
2-الشخص الي ينسرق ما النا اي دخل فيه في فيديو شرح عن السيرفر #⭐-goldcraft-⭐ 
3-اي نوع من السب حتى لو بالمزح بان ايبي يومين 
4-اي استفسار بشان اضافة او حذف شغلة احكي مع @■ψ KING ψ■ @♛-Owner-♛ 
قوانين الديسكورد:
1-السب وتقليل الاحترام بان لمدة اسبوع
2-عدم طلب اي رتبة عليها ميوت
3-عدم التكلم بشات ال #🎃-commands-🎃 #🎵command-music🎵
`)
.setColor("FFFF00")
message.channel.send(auto)
}})

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

client.on("message", async message => {
  //Narox
  var time = moment().format("Do MMMM YYYY , hh:mm");
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(), //Narox
    hours = currentTime.getHours() + 3,
    minutes = currentTime.getMinutes(),
    done = currentTime.getMinutes() + duration / 60000,
    seconds = currentTime.getSeconds();
  if (minutes < 10) {
    //Narox
    minutes = "0" + minutes;
  }
  var suffix = "AM"; //Narox
  if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12; //Narox
  }

  var filter = m => m.author.id === message.author.id; //Narox
  if (message.content.startsWith(prefix + "giveaway")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        ":heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**"
      );
    message.channel
      .send(
        `:eight_pointed_black_star:| **اكتب اسم الروم الي تبي القيف اواي فيه بدون منشن**`
      )
      .then(msg => {
        message.channel
          .awaitMessages(filter, {
            //Narox
            max: 1, //Narox
            time: 20000,
            errors: ["time"]
          })
          .then(collected => {
            //Narox
            let room = message.guild.channels.find(
              "name",
              collected.first().content
            ); //Narox
            if (!room)
              return message.channel.send(
                ":heavy_multiplication_x:| **لم اجد الروم :(**"
              ); //Narox
            room = collected.first().content;
            collected.first().delete(); //Narox
            msg
              .edit(":eight_pointed_black_star:| **اكتب مدة القيف اواي**")
              .then(msg => {
                message.channel
                  .awaitMessages(filter, {
                    max: 1,
                    time: 20000, //Narox
                    errors: ["time"]
                  })
                  .then(collected => {
                    //Narox
                    if (isNaN(collected.first().content))
                      return message.channel.send(
                        ":heavy_multiplication_x:| **هذا الرقم ليس موجوداً `` نفذ الامر مرة اخرى``**"
                      );
                    duration = collected.first().content * 60000;
                    collected.first().delete(); //Narox
                    msg
                      .edit(
                        ":eight_pointed_black_star:| **اكتب اسم القيف اواي **"
                      )
                      .then(msg => {
                        message.channel
                          .awaitMessages(filter, {
                            max: 1,
                            time: 20000, //Narox
                            errors: ["time"]
                          })
                          .then(collected => {
                            //Narox
                            title = collected.first().content;
                            collected.first().delete();
                            msg.delete();
                            message.delete();
                            try {
                              let giveEmbed = new Discord.RichEmbed()
                                .setDescription(
                                  `**${title}** \nللمشاركة اضغط على 🎉 ! \nمدة القيف اواي : ${duration /60000} **Minutes**\n **في الانشاء في :** ${hours}:${minutes}:${seconds} ${suffix}`
                                )
                                .setFooter(
                                  message.author.username,
                                  message.author.avatarURL
                                );
                              message.guild.channels
                                .find("name", room)
                                .send(
                                  " :heavy_check_mark: **تم انشاء القيف اواي بنجاح** :heavy_check_mark:",
                                  { embed: giveEmbed }
                                )
                                .then(m => {
                                  let re = m.react("🎉"); //Narox
                                  setTimeout(() => {
                                    let users = m.reactions.get("🎉").users; //Narox
                                    let list = users
                                      .array()
                                      .filter(
                                        u =>
                                          (u.id !== m.author.id) !==
                                          client.user.id
                                      ); //Narox
                                    let gFilter =
                                      list[
                                        Math.floor(
                                          Math.random() * list.length
                                        ) + 0
                                      ];
                                    let endEmbed = new Discord.RichEmbed() //Narox
                                      .setAuthor(
                                        message.author.username,
                                        message.author.avatarURL
                                      )
                                      .setTitle(title) //Narox
                                      .addField(
                                        " انتهى القيف اواي !🎉",
                                        `Winners : ${gFilter} \nEnded at :`
                                      )
                                      .setTimestamp();
                                    m.edit("** 🎉 انتهى القيف اواي 🎉**", {
                                      embed: endEmbed
                                    });
                                    message.guild.channels
                                      .find("name", room)
                                      .send(
                                        `**الفائز ${gFilter}! لقد فاز بـ \`${title}\`**`,
                                        { embed: {} }
                                      );
                                  }, duration); //Narox
                                });
                            } catch (e) {
                              //Narox
                              message.channel.send(
                                `:heavy_multiplication_x:| **انا لا املك الصلاحيات**`
                              );
                              console.log(e); //Narox
                            }
                          });
                      });
                  });
              });
          });
      });
  }
});



    client.on('message', message => {
     if (message.author.x5bz) return;
      if (!message.content.startsWith(prefix)) return;
     
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
     
      let args = message.content.split(" ").slice(1);
     
      if (command == "ban") {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
             
      if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
      let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      /*let b5bzlog = client.channels.find("name", "5bz-log");
     
      if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
      if (message.mentions.users.size < 1) return message.reply("**لازم تمنشن شخص**");
      if(!reason) return message.reply ("**اكتب سبب الطرد**");
      if (!message.guild.member(user)
      .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه اعلى**");
     
      message.guild.member(user).ban(7, user);
     
      const banembed = new Discord.RichEmbed()
      .setAuthor(`BANNED!`, user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("**الشخص:**",  '**[ ' + `${user.tag}` + ' ]**')
      .addField("**من:**", '**[ ' + `${message.author.tag}` + ' ]**')
      .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
      message.channel.send({
        embed : banembed
      })
    }
    });


client.on("message", async message => { //OMAR#6356
  if(message.content.startsWith(prefix + "bc")) { //OMAR#6356
    const args = message.content.split(" ").slice(1).join(" "); //OMAR#6356
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('لا تمتلك الصلاحيات الكافية');
    if(!args) return message.channel.send('يجب عليك  الرسالة'); //OMAR#6356
 //OMAR#6356
      let help = new Discord.RichEmbed() //OMAR#6356
          .setColor("RANDOM") //OMAR#6356
          .setThumbnail(message.author.avatarURL) //OMAR#6356
          .setDescription(`**انوع البرودكاست

          1- للكل بدون امبيد
          2- للكل بامبيد
          3- اونلاين بدون امبيد
          4- للالغاء
          **`);
         let typesMSG = await  message.channel.sendEmbed(help)
         var numbers = ["u0030u20E3", "u0031u20E3", "u0032u20E3", "u0033u20E3", "u0034u20E3", "u0035u20E3", "u0036u20E3", "u0037u20E3", "u0038u20E3", "u0039u20E3"]


       let r1 = await typesMSG.react(numbers[1]); //OMAR#6356
       let r2 = await typesMSG.react(numbers[2]); //OMAR#6356
       let r3 = await typesMSG.react(numbers[3]); //OMAR#6356
       let r4 = await typesMSG.react("❌"); //OMAR#6356




 let filter1 = (reaction, user) => reaction.emoji.name == numbers[1] && user.id == message.author.id;
 let filter2 = (reaction, user) => reaction.emoji.name == numbers[2] && user.id == message.author.id;
 let filter3 = (reaction, user) => reaction.emoji.name == numbers[3] && user.id == message.author.id;
 let filter4 = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;
 if (!typesMSG) return;

 let f1 = typesMSG.createReactionCollector(filter1, { //OMAR#6356
     time: 18000 //OMAR#6356
 });
 let f2 = typesMSG.createReactionCollector(filter2, { //OMAR#6356
     time: 18000
 }); //OMAR#6356
 let f3 = typesMSG.createReactionCollector(filter3, { //OMAR#6356
     time: 18000
 });
 let f4 = typesMSG.createReactionCollector(filter4, { //OMAR#6356
     time: 18000
 });


  

f1.on('collect', async r => { //OMAR#6356
  await typesMSG.delete();
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
    m.send(`${args}n ${m}`);
    })
    message.channel.send(`تم الارسال`); 
  
}); //OMAR#6356

f2.on('collect', async r => {
await typesMSG.delete();
message.guild.members.forEach(m => {
  var bc = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .addField('# | المرسل', message.author) //OMAR#6356
  .addField('# | الرسالة ', args)
  .addField('# | السيرفر', message.guild.name) //OMAR#6356
  .setColor('RANDOM')
  m.sendMessage(bc)
});
message.channel.send(`تم الارسال`)
}); //OMAR#6356

f3.on('collect', async r => {
await typesMSG.delete();
message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
  m.send(`${args}n ${m}`); //OMAR#6356
  })
  message.channel.send(``${message.guild.members.filter(m => m.presence.status !== 'online').size}` : عدد الاعضاء المستلمين`); 
});
 //OMAR#6356
f4.on('collect', async r => {
await typesMSG.delete();
message.channel.send('تم الالغاء بنجاح') //OMAR#6356
}); //OMAR#6356


  } //OMAR#6356

}); //OMAR#6356
client.on('message', message => {  
    if (message.author.bot) return; 
    if (message.content.startsWith(prefix + 'clear')) { 
    if(!message.channel.guild) return message.reply(`** هذا الامر لليسرفرات فقط**`); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`**انت لا تملك الصلاحيات !**`);
     if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`**انا لا املك الصلاحيات!**`);
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply(`** The number can't be more than **100** .**`).then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages)).then(msgs => {
    })
  }
});

client.login(process.env.BOT_TOKEN);
