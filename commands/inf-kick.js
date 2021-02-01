module.exports = {
    name: 'inf-kick',
    description: 'Verifica permissão para kickar alguém.',
    execute(message, args) {
        
        if(message.member.permissions.has('KICK_MEMBERS')) {
            message.channel.send('Você tem permissão para kickar alguém.');
        } else {
            message.channel.send('Você não tem permissão para kickar alguém.');
        }
    }
}