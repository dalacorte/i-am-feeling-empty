module.exports = {
    name: 'cargos',
    description: 'Role por reação.',
    async execute(message, args, Discord, client) {
        const channel = '806232533402517564';

        const bubbleTeaRole = message.guild.roles.cache.find(role => role.name === '1');
        const teaBubbleRole = message.guild.roles.cache.find(role => role.name === '2');

        const bubbleTeaEmoji = '🧋';
        const teaBubbleEmoji = '🧃';

        let embed = new Discord.MessageEmbed()
            .setColor('ffc0cb')
            .setTitle('Selecione alguma coisa.')
            .setDescription('Não sei o que colocar aqui.\n\n'
                + `${bubbleTeaEmoji} bubble tea delicinha\n\n`
                + `${teaBubbleEmoji} suco de caixinha podre`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(bubbleTeaEmoji);
        messageEmbed.react(teaBubbleEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === bubbleTeaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(bubbleTeaRole);
                }
                if (reaction.emoji.name === teaBubbleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(teaBubbleRole);
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === bubbleTeaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(bubbleTeaRole);
                }
                if (reaction.emoji.name === teaBubbleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(teaBubbleRole);
                }
            } else {
                return;
            }
        });
    }
}