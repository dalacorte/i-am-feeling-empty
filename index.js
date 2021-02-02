const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = '!'
const fs = require('fs');

const memberCounter = require('./counters/contador-membros');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Estamos online!');
    memberCounter(client);
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'membro');
 
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('806231069480583228').send(`Bem-vindo(a) <@${guildMember.user.id}>.`);
});

client.on('message', message => {
    if(message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ajuda') {client.commands.get('ajuda').execute(message, args, Discord);} 

    else if(command === 'ping') {client.commands.get('ping').execute(message, args);} 

    else if(command === 'inf-kick') {client.commands.get('inf-kick').execute(message, args);} 
    
    else if(command === 'inf-ban') {client.commands.get('inf-ban').execute(message, args);} 
    
    else if(command === 'limpar') {client.commands.get('limpar').execute(message, args);} 
    
    else if(command === 'kick') {client.commands.get('kick').execute(message, args);} 
    
    else if(command === 'ban') {client.commands.get('ban').execute(message, args);}

    else if(command === 'mutar') {client.commands.get('mutar').execute(message, args);}

    else if(command === 'desmutar') {client.commands.get('desmutar').execute(message, args);}

    else if(command === 'cor') {client.commands.get('cor').execute(message, args);}

    else if(command === 'cargos') {client.commands.get('cargos').execute(message, args, Discord, client);}
});
