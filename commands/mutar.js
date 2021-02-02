const ms = require('ms');

module.exports = {
    name: 'mutar',
    description: 'Mutar um usuário.',
    execute(message, args) {

        const target = message.mentions.users.first();

        if(target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'membro');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            if(!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> foi mutado.`);
                return;
            }

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> foi mutado por ${ms(ms(args[1]))}`);
            
            

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('Usuário não encontrado.');
        }
    }
}