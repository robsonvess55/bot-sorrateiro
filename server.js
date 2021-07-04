require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const diceController = require('./Controllers/diceController');
const discordController = require('./Controllers/discordController');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  if (msg.content.startsWith(process.env.BOT_PREFIX)) {
    let query = msg.content.replace(process.env.BOT_PREFIX, "");
    switch (query.split(' ')[0]){
      case 'roll' :
        diceController.rollSimpleDice(msg);
        break;
      case 'test' :
        discordController.test(msg);
        break;
      default : 
         discordController.notFound(msg);
    }
  }
});

client.login(process.env.DISCORD_TOKEN);