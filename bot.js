const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"

client.on('message', message => {   
     if (message.content === "-ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("RANDOM")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
 

  message.channel.sendEmbed(embed);
    }
});

client.on('message', msg => {   if (msg.content === 'السلام عليكم') {     msg.reply('وعليكم السلام');   } });

// First Code
// 1- Copy the first code and past it in your "index.js".
client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':x:']
  var grid_message;
 
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    var player1_id = message.author.id
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `**Battle Start :** <@${player1_id}> __Vs__ <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += 'n_(لقد خسرت, العب مع نفسك :joy:)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + 'n' +
                         ':four::five::six:' + 'n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('**Loading... Please wait for the :ok: reaction.**')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It's <@${turn_id}>'s ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listeprefix initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.channel.send(`Try o!xo @user`)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 }); 
 
// Second Code
// 2-Create a file "xo.js".
// 3-Copy + past second code.

module.exports = (client, message, new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message) => {

  var score = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  var will_end_game = false;

  client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.id == new_message.id && turn_id == user.id && !will_end_game) {

      let emoji;
      // Convert emoji identifier to :emoji: format
      switch(reaction.emoji.identifier) {
        case '1%E2%83%A3':
          emoji = ':one:';
          if (score[0][0] == null) score[0][0] = symbol;
          break;
        case '2%E2%83%A3':
          emoji = ':two:';
          if (score[0][1] == null) score[0][1] = symbol;
          break;
        case '3%E2%83%A3':
          emoji = ':three:';
          if (score[0][2] == null) score[0][2] = symbol;
          break;
        case '4%E2%83%A3':
          emoji = ':four:';
          if (score[1][0] == null) score[1][0] = symbol;
          break;
        case '5%E2%83%A3':
          emoji = ':five:';
          if (score[1][1] == null) score[1][1] = symbol;
          break;
        case '6%E2%83%A3':
          emoji = ':six:';
          if (score[1][2] == null) score[1][2] = symbol;
          break;
        case '7%E2%83%A3':
          emoji = ':seven:';
          if (score[2][0] == null) score[2][0] = symbol;
          break;
        case '8%E2%83%A3':
          emoji = ':eight:';
          if (score[2][1] == null) score[2][1] = symbol;
          break;
        case '9%E2%83%A3':
          emoji = ':nine:';
          if (score[2][2] == null) score[2][2] = symbol;
          break;
        default:
          break;
      }

      // Replace number tile with O or X (checks if it exists first)
      if (grid_message.content.indexOf(emoji) == -1) {
        return;
      }
      grid_message.edit(grid_message.content.replace(emoji, symbol))
      .then((new_mes) => {
        grid_message = new_mes;
        console.log("Successful # tile to symbol switch");
      })
      .catch(console.error);

      // Check if the game has concluded
      if (didPlayerWin(symbols[0], player1_id) || didPlayerWin(symbols[1], player2_id) || didItTie()) {
        will_end_game = true;
        return;
      }

      // Replace player with the next and symbol with the next
      let temp_message = new_message.content.replace(`<@${turn_id}>`, `<@${toggle_player(turn_id, player1_id, player2_id)}>`);
      temp_message = temp_message.replace(symbol, toggle_symbol(symbol));
      new_message.edit(temp_message)
      .then(console.log("Successful turn switch"))
      .catch(console.error);

      // Toggle symbols between O and X and players 1 and 2
      symbol = toggle_symbol(symbol);
      turn_id = toggle_player(turn_id, player1_id, player2_id);
    }
  })


  // Function for toggling players
  function toggle_player(turn_id, player1_id, player2_id) {
    let player_switched;
    if (turn_id == player1_id) {
      player_switched = player2_id;
    }
    else {
      player_switched = player1_id;
    }
    return player_switched;
  }

  // Function for toggling symbols
  function toggle_symbol(symbol) {
    return symbols[Math.abs(symbols.findIndex((sym) => {
      return sym == symbol;
    }) - 1)];
  }

  // Function for checking if a player won
  function didPlayerWin(sym, player) {
    for (let i = 0; i < score.length; i++) {
      // Horizontal checks
      if (score[i][0] == sym &&
          score[i][1] == sym &&
          score[i][2] == sym) {
            new_message.edit(`Congra,<@${player}> !`)
            .then(console.log('Successful win'))
            .catch(console.error);
            return true;
      }
      // Vertical checks
      else if (score[0][i] == sym &&
               score[1][i] == sym &&
               score[2][i] == sym) {
               new_message.edit(`Congra,<@${player}> !`)
               .then(console.log('Successful win'))
               .catch(console.error);
               return true;
      }
    }
    // Diagonal checks
    if (score[0][0] == sym &&
        score[1][1] == sym &&
        score[2][2] == sym) {
               new_message.edit(`congra,<@${player}> !`)
          .then(console.log('Successful win'))
          .catch(console.error);
          return true;
    }
    else if (score[0][2] == sym &&
             score[1][1] == sym &&
             score[2][0] == sym) {
               new_message.edit(`congra,<@${player}> !`)
               .then(console.log('Successful win'))
               .catch(console.error);
               return true;
    }

    return false;
  }

  // Function for checking if it's a tie
  function didItTie() {
    let null_counter = 0;
    for (let i = 0; i < score.length; i++) {
      for (let j = 0; j < score.length; j++) {
        if (score[i][j] == null) {
          null_counter++;
        }
      }
    }
    if (null_counter == 0) {
      new_message.edit('Boo! It's a tie!')
      .then(console.log('Successful tie'))
      .catch(console.error);
      return true;
    }
  }
}

client.login(process.env.BOT_TOKEN);
