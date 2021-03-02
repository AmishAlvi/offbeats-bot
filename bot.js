require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

73

var responses = [
    'I can neither confirm nor deny',
    'only wake the dreamer knows'
];


audioElement.setAttribute('src', textArray[randomNumber]);



bot.on('message', msg => {
  if (msg.content === 'hey offbeats bot') {
    msg.reply('hey, you are loved');
    //msg.channel.send('pong');

  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }

  else if (msg.content.startsWith('!livenow')) {
    bot.user.setActivity("offbeat", {
        type: "STREAMING",
        url: "https://www.twitch.tv/theoffbeats"
      });
  }
  else if (msg.content.startsWith('!notlive')) {
    bot.user.setActivity("offbeats", {
        type: "GAME",
        url: "https://www.twitch.tv/theoffbeats"
      });
  } else if (msg.content === '!static') {
    msg.channel.send('I love Mr Static');
  }

  else if (message.isMemberMentioned(client.user)) { 
    randomNumber = Math.floor(Math.random()*textArray.length);
    msg.channel.send(responses[randomNumber]);
 }
  
});
