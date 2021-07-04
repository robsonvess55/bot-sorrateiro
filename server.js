require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');
const texts = require('./texts');
const diceFunctions = require('./utils/diceFunctions');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith(process.env.BOT_PREFIX+'roll ')) {
    let query = msg.content.replace("$roll ", "");
    let values = query.split("d");
    let roll = diceFunctions.rollSimpleDice(values[0], values[1]);
    let message = `${msg.author.username} rolou ${ roll.total_roll_value } dos valores [${roll.roll_values.concat()}]`;
    
    let body_reqest = {
      'roll' : message,
      'discord_user_id' : msg.author.id
    };

    axios.post(process.env.API_URL+'log', body_reqest)
          .then(response => {
            msg.reply(message);
          })
          .catch(error => {
            console.log(error);
             msg.reply('deu erro na request!');
          });
  }


//   if(msg.content === 'produtos'){
//     axios.get(process.env.API_URL+'estab/products/1',{
//     headers: {
//         'Authorization': 'Bearer ' + process.env.API_TOKEN
//       }})
//     .then(response => {
//         const channel = msg.channel;
//         products = response.data;
//         channel.send('Os produtos cadastrados foram:');
//         products.forEach((product) => {
//             channel.send('nome: **'+product.name+'** descrição: *'+product.description+'*');
//         });
//     })
//     .catch(error => {
//         console.log(error);
//         msg.reply('deu erro na request!');
//     });
//   }

//   if (msg.content === 'meus-dados') {
//     if(msg.author.id === '194933460639547392'){
//         msg.channel.send('pau no seu cu lucas');
//     }else{
//         msg.channel.send(`seu nick é: ${msg.author.username}`);
//         msg.channel.send(`seu id é: ${msg.author.id}`);
//         msg.channel.send(`sua ultima mensagem foi: ${msg.author.lastMessage}`);
//         msg.channel.send(`este canal se chama: ${msg.channel.name}`);
//         msg.channel.send(`o id deste canal: ${msg.channel.id}`);
//     }
//   }

});

client.login(process.env.DISCORD_TOKEN);