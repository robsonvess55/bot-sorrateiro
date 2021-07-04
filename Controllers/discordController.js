module.exports = {
    test : test,
    notFound : notFound
};

function test (msg) {
    msg.reply('teste :mouse:');
}

function notFound (msg) {
    msg.reply('Comando não encontrado! :cry:');
}