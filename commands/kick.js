module.exports = {
    name: 'kick',
    description: 'Comando para kickar um usuário',
    execute(message, args) {

        const member = message.mentions.users.first();

        if(member) {
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send('O usuário foi kickado.');
        } else {
            message.channel.send('Você não concluiu essa ação.');
        }
    }
}