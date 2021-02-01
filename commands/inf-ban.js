module.exports = {
    name: 'inf-ban',
    description: 'Verifica permissão para banir alguém.',
    execute(message, args) {
        
        if(message.member.permissions.has('BAN_MEMBERS')) {
            message.channel.send('Você tem permissão para banir alguém.');
        } else {
            message.channel.send('Você não tem permissão para banir alguém.');
        }
    }
}