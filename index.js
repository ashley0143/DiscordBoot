const Client = require('./src/structures/Client')

const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_VOICE_STATES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES'
    ]
})

module.exports = client;
// console.log(client.commands);
client.login(process.env.token)
