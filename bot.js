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

client.login(process.env.BOT_TOKEN);
