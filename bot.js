const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require ("moment");
const prefix = "!";

client.on("message", message => {
    if (message.author.bot) return;
   
    let command = message.content.split(" ")[0];
   
    if (command === "mute")  {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send("").catch(console.error);
    let user = message.mentions.users.first();
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.channel.send("** please create role 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.channel.send(`🙄 - I can't find this member`).catch(console.error);
   
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('Usage:', 'mute')
      .addField('Muted:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('By:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.channel.send(`✅** ${user.username}  muted from the text! **🤐`).catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.channel.send(`✅** ${user.username}  muted from the text! **🤐`).catch(console.error);
  });
    }
 
  };
 
});

client.on("message", message => {
    if (message.author.bot) return;
   
    let command = message.content.split(" ")[0];
   
    if (command === "unmute")  {
          if (!message.member.hasPermission('MANAGE_ROLES')) return .catch(console.error);
    let user = message.mentions.users.first();
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** You Do Not have 'Muted' Role **").catch(console.error);
    if (message.mentions.users.size < 1) return message.channel.send(`🙄 - I can't find this member`).catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('Usage:', 'unmute')
      .addField('Unmuted:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('By:', `${message.author.username}#${message.author.discriminator}`)
 
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** No Manage Roles Permission **').catch(console.error);
 
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.channel.send(`✅ ${user.username}  unmuted ! `).catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.channel.send(`✅ ${user.username}  unmuted ! `).catch(console.error);
  });
    }
 
  };
 
});

client.login(process.env.BOT_TOKEN);
