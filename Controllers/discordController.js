module.exports = {
    test : test,
    notFound : notFound,
    randomImage : randomImage,
    dmTest : dmTest
};
let duels = [];
function test (msg) {
    msg.reply('teste :mouse:');
}

function notFound (msg) {
    msg.reply('Comando não encontrado! :cry:');
}

function randomImage (msg) {
    msg.channel.send({ files: ['https://i.pinimg.com/564x/c8/41/ed/c841ed675095d7eea2cd4ec1e72a4827.jpg'] });
}

function dmTest(msg) {
    msg.author.send('Greetings traveler!');
}