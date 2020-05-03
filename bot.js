const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"

client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { 
    let pages = [`
***__وصف عن البوت__***
**
:gem:  البوت فيه كثير ميزات حلوة و جميلة
 ا:rocket: البوت يعمل قرابة 24 ساعة
**
        ***__General orders__***
**
『?serv /يعرض لك معلومات عن السيرفر』
『?serv2 / يعرض لك معلومات عن السيرفر ( الكود الثاني ) للمعلومات』
『?id / يعرض لك معلومات عنك』
『?myroles / لرؤية جميع رتبك الشخصية بالسيرفر』
『?id / يعرض لك معلومات عنك』
『?link / لمعمل انفايت ( دعوة ) لشخص』
『?inv / لدعوة البوت الى سيرفرك』
『?support / سيرفر المساعدة』
『?cmind / لكتابة اي شيء تقوله داخل صورة』
『?servavatar / لرؤية صورة السيرفر』
『?count / لرؤية عدد الاعضاء بالسيرفر』
『?avatar / لرؤية صورة شخص 』
『?bot-info / لرؤية معلومات عن البوت 』
『?report / لرفع شكوى على عضو 』
『?servers / لرؤية عدد السيرفرات التي داخل بها البوت 』
『?myid / لمعرفة الايدي الخاص بك 』
**
  `
,`
        ***__Admin orders__***
**
『?clear / لحذف الشات 』
『?mc / لقفل الشات  』
『?unmc / لفتح الشات 』
『?bc / لارسال رسالة لجميع اعضاء السيرفر 』
『?kick / لطرد شخص من الدسكورد 』
『?ban / لاعطاء شخص باند من الدسكورد 』
『?mute / لاعطاء شخص ميوت 』
『?unmute / لفك ميوت شخص 』
『?ct / لانشاء روم كتابي 』
『?cv / لانشاء روم صوتي 』
『?rolebc / برود كاست للرتب 』
**
  `
,`
        ***__Games orders__***
**
『?لعبة صراحة / صراحة 』
『?لعبة كت تويت / كت تويت 』
『?لعبة لو خيروك / لو خيروك』
『?rps / لعبة حجرة ورقة مقص 』
『?اسئلة للعبة فورت نايت /  فورت نايت 』
**
   
`]
    let page = 1;
 
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])
 
    message.author.sendEmbed(embed).then(msg => {
 
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

client.login(process.env.BOT_TOKEN);
