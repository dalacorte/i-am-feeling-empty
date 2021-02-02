module.exports = {
    name: 'desmutar',
    description: 'Desmutar um usuário.',
    execute(message, args) {

        const target = message.mentions.users.first();

        if(target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'membro');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> foi desmutado.`);
        } else {
            message.channel.send('Usuário não encontrado.');
        }
    }
}