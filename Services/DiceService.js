class DiceService {
  rollSimpleDice(rollTimes = 1, rollSizes = 1) {
    console.log('caiu no service')
    let total_roll_value = 0;
    let roll_values = [];
    for (let i = 0; i < rollTimes; i++) {
      let result = Math.floor(Math.random() * rollSizes) + 1;
      total_roll_value += result;
      roll_values.push(result);
    }
    
    return {
      "total_roll_value": total_roll_value,
      "roll_values": roll_values
    };
  }
}

module.exports = DiceService
