const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require ("moment");
const prefix = "!";

client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { 
    let pages = [`
الاوامــر الــعـــامـــة

⤠ !server ⥨ معلومات عن السيرفر                      
⤠ !ping ⥨ لمعرفه سرعه البوت
⤠ !emojilist ⥨ لعرض الايموجي حقت السيرفر
⤠ !id ⥨ لمعرفة معلومات حسابك
⤠ !avatar ⥨ لاعطائك صورة الشخص اللي منشنته مع الرابط
⤠ !link ⥨ يعطيك رابط انفايت للسيرفر اللي انت فيه
⤠ !trans <language> <any thing> ⥨ يترجم لك الي تبيه من اي لغة
⤠ !short ⥨ لاختصار الروابط
⤠ !tag ⥨ يكتب لك الكلمة بشكل جميل وكبير
⤠ !contact ⥨ لارسال رسالة لصاحب البوت
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
client.login(process.env.BOT_TOKEN);
