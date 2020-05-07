const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require ("moment");
const prefix = "!";

client.on("message", message => {
  if (message.content.startsWith(prefix + "trans")) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {
      const embed = new Discord.RichEmbed()
        .setColor("FFFFFF")
        .setDescription(
          "**ترجمة الكتابة.**استعمل: `*translate <الكلمة لتبي> <االغة>`"
        );

      return message.channel.send(embed);
    } else {
      if (args.length === undefined) {
        return message.channel.send(
          "**ترجمة الكتابة.**استعمل: `*translate <الكلمة لتبي> <االغة>`"
        );
      } else {
        let transArg = args[0].toLowerCase();

        args = args.join(" ").slice(1);
        let translation;

        if (!Langs.includes(transArg))
          return message.channel.send(`**Language not found.**`);
        args = args.slice(transArg.length);

        translate(args, {
          to: transArg
        }).then(res => {
          const embed = new Discord.RichEmbed()
            .setAuthor("Translator", client.user.displayAvatarURL)
            .addField(`Input`, `\`\`\`${args}\`\`\``)
            .setColor("#42f4c8")
            .addField(`Output`, `\`\`\`${res.text}\`\`\``);
          return message.channel.send(embed);
        });
      }
    }
  }
});


client.login(process.env.BOT_TOKEN);
