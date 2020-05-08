const Discord = require ("discord.js");
const client = new Discord.Client();
const moment = require ("moment");
const prefix = "!";

client.on(‘message’, message => {
if(message.content.startsWith(prefix + ‘mute’)){
let user = message.mentions.users.first();
let role = message.guild.roles.find(r => r.name === ‘Muted’);
if(!role) message.guild.createRole({name: ‘Muted’});
if(user.bot){
return message.channel.send(I can't mute ${user} because he is a bot);
}
if(user.hasPermission(‘ADMINISTRATOR’)) {
return message.channel.send(I can't mute ${user} because he is staff);
}

if(!user){
    message.channel.send(`There's no person to mute tho`);
}
message.guild.channels.forEach(f => {
    f.overwritePermissions(role, {
        SEND_MESSAGES: false
    });
    user.addRole(role);
   
});
 message.channel.send(`I muted ${user}`);
}
});

client.on(‘message’, message => {
if(message.content.startsWith(prefix + ‘unmute’)){
let user = message.mentions.users.first();

let role = message.guild.roles.find(r => r.name === 'Muted');
if(!user.roles.has(role)) {
return message.channel.send(He is not muted);
}
user.removeRole(role).then(message.channel.send(Unmuted ${user}));

}
});


client.login(process.env.BOT_TOKEN);
