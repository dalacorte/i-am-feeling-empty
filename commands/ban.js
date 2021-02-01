module.exports = {
    name: 'ban',
    description: 'Comando para banir um usuário.',
    execute(message, args) {

        const member = message.mentions.users.first();

        if(member) {
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send('O usuário foi banido.');
        } else {
            message.channel.send('Você não concluiu essa ação.');
        }        
    }
}