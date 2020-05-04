const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require ("moment");
const prefix = "!";

client.on("message", message => {
	var prefix = "*";
 if (message.content === "*help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#8325c0") 
      .setDescription(`
	  
	       Help Commands: 

			 
${prefix}public ⥨ الاوامر العامة

${prefix}admin ⥨ اوامر الادارة
			 
${prefix}games ⥨ اوامر الالعاب

${prefix}music ⥨ اوامر الموسيقى

Other Commands:


${prefix}invite ⥨ لدعوة البوت الى سيرفرك

${prefix}support ⥨ لدخول سيرفر الدعم


	  `)
   message.channel.sendEmbed(embed)
    
   }
   }); 
   

   client.on("message", message => {
 if (message.content === "*public") {
        message.react("📫")
	           message.react("✅")
  const embed = new Discord.RichEmbed() 
      .setColor("#8325c0")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
الاوامــر الــعـــامـــة

⤠ *invite ⥨ لدعوة البوت الى سيرفرك
⤠ *server ⥨ معلومات عن السيرفر                      
⤠ *say ⥨ البوت يردد كلامك         
⤠ *setcolor ⥨ عشان تغير لونك ملاحظة لازم تحط رقم اللون                                          
⤠ *bot ⥨ معلومات عن البوت
⤠ *ping ⥨ لمعرفه سرعه البوت
⤠ *members ⥨ معلومات عن الاعضاء
⤠ *emojilist ⥨ لعرض الايموجي حقت السيرفر
⤠ *id ⥨ لمعرفة معلومات حسابك
⤠ *avatar ⥨ لاعطائك صورة الشخص اللي منشنته مع الرابط
⤠ *link ⥨ يعطيك رابط انفايت للسيرفر اللي انت فيه
⤠ *trans <language> <any thing> ⥨ يترجم لك الي تبيه من اي لغة
⤠ *short ⥨ لاختصار الروابط
⤠ *embed ⥨ كتابة كلامك داخل امبد
⤠ *tag ⥨ يكتب لك الكلمة بشكل جميل وكبير
⤠ *contact ⥨ لارسال رسالة لصاحب البوت
⤠ *support ⥨ لدخول سيرفر دعم البوت
	  
`)


message.author.sendEmbed(embed)

}
});

client.login(process.env.BOT_TOKEN);
