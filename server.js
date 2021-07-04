require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

const diceController = require('./discord/dicecontroller/diceController');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith(process.env.BOT_PREFIX+'roll ')) {
    diceController.rollSimpleDice(msg);
  }

  if(msg.content === process.env.BOT_PREFIX+'test'){
    diceController.test(msg);
  }

});

client.login(process.env.DISCORD_TOKEN);