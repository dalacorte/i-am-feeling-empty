module.exports = {
    name: 'ajuda',
    description: 'Todos os comandos do bot.',
    execute(message, args, Discord) {
        
        const Embed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setTitle('Comandos básicos')
        .setURL('https://discord.gg/CSrKYTArQf')
        .setAuthor('Dalacorte', 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/45a4ea12992663.5626fbc34f197.jpg', 'https://discord.gg/CSrKYTArQf')
        .setDescription('Mensagem para verificar os comandos do bot')
        .addFields(
            {name: '@ajuda', value: 'Comandos básicos', inline:true},
            {name: '@ping', value: 'Pong', inline:true},
            {name: '@limpar', value: 'Limpa mensagens', inline:true},
            {name: '@kick', value: 'Kickar um usuário', inline:true},
            {name: '@ban', value: 'Banir um usuário', inline:true},
            {name: '@inf-kick', value: 'Verificar permissão', inline:true},
            {name: '@inf-ban', value: 'Verficar permissão', inline:true}
        )
        //.setImage('https://mir-s3-cdn-cf.behance.net/project_modules/disp/45a4ea12992663.5626fbc34f197.jpg')
        .setFooter('Não se esqueça de conferir as regras (@regas) do servidor!')
        .setTimestamp()

        message.channel.send(Embed);
    }
}