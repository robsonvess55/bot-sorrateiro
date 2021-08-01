const axios = require('axios');

class DiscordController {
  test(msg) {
    msg.reply('teste :mouse:');
  }

  notFound(msg) {
    msg.reply('Comando não encontrado! :cry:');
  }

  randomImage(msg) {
    msg.channel.send({ files: ['https://i.pinimg.com/564x/c8/41/ed/c841ed675095d7eea2cd4ec1e72a4827.jpg'] });
  }

  dmTest(msg) {
    msg.author.send('Greetings traveler!');
  }

  register(msg) {
    axios.post(process.env.API_URL + 'discord/register', {
      'discord_id': msg.author.id
    })
    .then(response => {
      console.log(response)
      msg.author.send(response.data);
    })
    .catch(error => {
      msg.author.send('Houve um erro na requisição');
      console.log(error);
    });
  }
}

module.exports = DiscordController
