module.exports = {
    name: 'ping',
    description: 'Ping Pong.',
    execute(message, args) {

        let role = message.guild.roles.cache.find(r => r.name === 'Ping!');
        
        if(message.member.roles.cache.some(r => r.name === 'Ping!')){
            message.channel.send('pong')
        } else {
            message.channel.send('Estou lhe dando a role ping.');
            message.member.roles.add(role).catch(console.error);
        }
    }
}