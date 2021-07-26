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
      case 'image' :
        discordController.randomImage(msg);
        break;
      case 'dm' :
        discordController.dmTest(msg);
        break;
      case 'register' :
        discordController.register(msg);
        break;
      case 'idtest' :
        //msg.reply(msg.mentions.users.entries().next().value[1].send('teste testado'));
        //console.log(msg.mentions.users.entries().next().value[0]);
        client.users.fetch(msg.mentions.users.entries().next().value[0]).then(user => {
          msg.reply(`O user marcado foi ${user.username}`);
        });       
        break;
      default : 
        discordController.notFound(msg);
    }
  }
});

client.login(process.env.DISCORD_TOKEN);