const Client = require('./src/structures/Client')
const mongoose = require('mongoose');
const chalk = require("chalk");
const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_VOICE_STATES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES'
    ]
})

mongoose.connect(process.env.db, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(connect => console.log(chalk.green("[MONGODB]") + " Connected")).catch(err => console.error(chalk.red("[MONGODB] Erro ") + err));


module.exports = client;
client.login(process.env.token)
