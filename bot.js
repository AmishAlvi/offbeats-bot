require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const cleverbot = require("cleverbot-api-free");
const client = new cleverbot();

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

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
  } else if (msg.content.startsWith('!livenow')) {
    bot.user.setActivity("offbeat", {
        type: "STREAMING",
        url: "https://www.twitch.tv/theoffbeats"
      });
    
    var role = msg.guild.roles.cache.get("🔴 offbeats live now");;
    bot.user.roles.add(role).catch(console.error);
  } else if (msg.content.startsWith('!notlive')) {
    bot.user.setActivity("offbeats", {
        type: "GAME",
        url: "https://www.twitch.tv/theoffbeats"
      });
  } else if (msg.content === '!static') {
    msg.channel.send('I love Mr Static');
  }
  
  else if (msg.content.startsWith('!question')) { 
    var responses = [
      'I can neither confirm nor deny',
      'only wake the dreamer knows',
      'shady said no',
      'no, but we should probably ban static just incase',
      'who are you?',
      'the real question is: why?'
    ]
    randomNumber = Math.floor(Math.random()*responses.length)
    resp = responses[randomNumber]
    msg.channel.send(resp)
  }
  else if (msg.content === '!doogdoogsleydoogertons') {
    msg.channel.send('did you mean doggy?');
  }
  else if (msg.mentions.has(bot.user.id)) {
    client.send(
      "message",
      async response => {
          console.log(response);
          msg.reply(response);
      },
    );
  }
  
});
