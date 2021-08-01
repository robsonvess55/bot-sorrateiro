'use strict'
const DiceService = require('../Services/DiceService');


class DiceController {
  rollSimpleDice(msg){
    let diceService = new DiceService();
    let query = msg.content.replace("$roll ", "");
    let values = query.split("d");
    let roll = diceService.rollSimpleDice(values[0], values[1]);
    let message = `:game_die: ${msg.author.username} rolou ${ roll.total_roll_value } dos valores [${roll.roll_values.concat()}]`;
    msg.reply(message);
  }
}

module.exports = DiceController
