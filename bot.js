const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#"
client.on('ready', () => {
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('[           BOT IS ONLINE         ]') 
});
client.on('message', AlphaForever => { //by Alpha Codes 2019,
 
    var alpah //by Alpha Codes 2019,
 = AlphaForever.content.toLowerCase().split(" ")[0];
//by Alpha Codes 2019,
  var moment = require('moment');
 // npm i moment
if(alpah == prefix + 'server') {//by Alpha Codes 2019,
 
  let najzxb = AlphaForever.guild.members.filter(m=>m.user.bot).size
  let najzxmb = [AlphaForever.guild.memberCount] - [najzxb]
  if(!AlphaForever.member.hasPermission('ADMINISTRATOR')) return AlphaForever.reply('``ADMINISTRATOR`` **انت لا تمتلك صلاحية**').then(msg => msg.delete(3000));
  AlphaForever.guild.fetchBans().then(bans => {//by Alpha Codes 2019,
 
    var alphabad = bans.size;
    var alpahchan = new Discord.RichEmbed()
      .setTitle(`:books: [ **${AlphaForever.guild.name}** ] **Informations Server**`)
      .addField(`:crown: **Server Owner**`, `[ ${AlphaForever.guild.owner} ]`, true)
      .addField(`:id: **Server ID**`, `**${AlphaForever.guild.id}**`, true)
      .addField(`:satellite: **Server Type**`, `[ **${AlphaForever.guild.region}** ]`, true)
      .addField(`:date: **Server Created At**`, ` [ **${moment(AlphaForever.guild.createdAt).format("LL")}** ]`, true)
      .addField(`:first_place: **Roles Amount**`, ` [ **${AlphaForever.guild.roles.size}** ]`, true)
      .addField(`:name_badge: **Bans Amount**`, ` [ **${alphabad}** ]`, true)
      .addField(`:bar_chart: **Channels Amount**`, ` [ **${AlphaForever.guild.channels.size}** ]`, true)
      .addField(`:pencil: **Categores Amount**`, ` [ **${AlphaForever.guild.channels.filter(m=>m.type == 'category').size}** ]`, true)
      .addField(`:pencil: **Channels Text Amount**`, ` [ **${AlphaForever.guild.channels.filter(m=>m.type == 'text').size}** ]`, true)
      .addField(`:microphone2: **Channels Voice Amount**`, ` [ **${AlphaForever.guild.channels.filter(m=>m.type == 'voice').size}** ]`, true)
        .addField(`:zzz: **AFK Channel**`, ` [ **${AlphaForever.guild.afkChannel || 'لايوجد روم أفك'}** ]`, true)
      .addField(`:robot: **Bots Count**`, ` [ **${najzxb}** ]`, true)
      .addField(`:busts_in_silhouette: **Members Count**`, ` [ **${najzxmb}** ]`, true)
        .addField(`:green_heart: **Online Members**`, ` [ **${AlphaForever.guild.members.filter(m=>m.presence.status == 'online').size}** ]`, true)
        .addField(`:yellow_heart: **Idle Members**`, ` [ **${AlphaForever.guild.members.filter(m=>m.presence.status == 'idle').size}** ]`, true)
        .addField(`:red_circle: **Dnd Members**`, ` [**${AlphaForever.guild.members.filter(m=>m.presence.status == 'dnd').size}** ]`, true)
        .addField(`:black_circle: **Offline Members**`, ` [ **${AlphaForever.guild.members.filter(m=>m.presence.status == 'offline').size}** ]`, true)
//by Alpha Codes 2019,
 
        .addField(`:bust_in_silhouette: **Last Member**`, ` [ ${Array.from(AlphaForever.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `<@!${m.id}>`).splice(0, 1)} ]`, true)
        .setTimestamp()
      .setColor('black')//by Alpha Codes 2019,
 
      .setThumbnail(client.user.avatarURL)
      AlphaForever.channel.send(alpahchan)
   })
 
 
  };
});
 
client.login(process.env.BOT_TOKEN);
