const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require ("moment");
const prefix = "!";

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
                                  `**${title}** \nللمشاركة اضغط على 🎉 ! \nمدة القيف اواي : ${duration /
                                    60000} **Minutes**\n **في الانشاء في :** ${hours}:${minutes}:${seconds} ${suffix}`
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

client.login(process.env.BOT_TOKEN);
