module.exports = async (client) =>{
    const guild = client.guilds.cache.get('804580244375208017');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('806269110698115102');
        channel.setName(`membros: ${memberCount.toLocaleString()}`);
        console.log('Atualizando contador de membros.');
    }, 50000);
}