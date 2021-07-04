module.exports = {
    values : {
        roll_20 : "Rolou um vinte!",
        roll_normal : "Rolou: "
    },
    rollSimpleDice : rollSimpleDice,

};

function rollSimpleDice (rollTimes = 1, rollSizes = 1) {
    let total_roll_value = 0;
    let roll_values = [];
    for(let i = 0; i < rollTimes; i ++){
      let result = Math.floor(Math.random() * rollSizes) + 1;
      total_roll_value += result;
      roll_values.push(result);
    }

    return {
        "total_roll_value" : total_roll_value,
        "roll_values" : roll_values
    };
}