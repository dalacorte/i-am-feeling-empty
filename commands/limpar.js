module.exports = {
    name: 'limpar',
    description: 'Limpa um número X de mensagens.',
    async execute(message, args) {

        if(!args[0]) {
            return message.reply('Digite um número de mensagens que deseja apagar.');
        }
        if(isNaN(args[0])) {
            return message.reply('Apenas números!');
        }

        if(args[0] > 100) {
            return message.reply('Você não pode apagar mais do que 100 mensagens.');
        }
        if(args[0] < 1) {
            return message.reply('Você deve deleter pelo menos uma mensagem.');
        }

        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
        });

    }
}