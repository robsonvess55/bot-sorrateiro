const diceFunctions = require('../Utils/diceFunctions');
const logRequests = require('../Requests/logRequests');

module.exports = {
    rollSimpleDice : rollSimpleDice
};

function rollSimpleDice(msg){
    let query = msg.content.replace("$roll ", "");
    let values = query.split("d");
    let roll = diceFunctions.rollSimpleDice(values[0], values[1]);
    let message = `:game_die: ${msg.author.username} rolou ${ roll.total_roll_value } dos valores [${roll.roll_values.concat()}]`;
    
    let body = {
      'roll' : message,
      'discord_user_id' : msg.author.id
    };

    logRequests.logStore('log', body).then(() => {
        msg.reply(message);
    })
    .catch(error => {
        msg.reply('Houve um erro na requisição');
        console.log(error);
    });

}
