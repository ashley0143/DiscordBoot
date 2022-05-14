const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const client = require('.././index.js');
const cmds = client.commands;

const rest = new REST({ version: '9' }).setToken(process.env.token);
(async () => {

    try {
       await rest.put(
            Routes.applicationCommands(process.env.client_id),
            /*
            By default, the slash commands are in Guild mode. 
            To have the global slash commands, just replace
            " Routes.applicationGuildCommands(client_id, guild_id), " by
            " Routes.applicationCommands(client_id) "
            **/
            { body: cmds },
        );
        await rest.put(
            Routes.applicationGuildCommands(process.env.client_id, process.env.guild_id),
            /*
            By default, the slash commands are in Guild mode. 
            To have the global slash commands, just replace
            " Routes.applicationGuildCommands(client_id, guild_id), " by
            " Routes.applicationCommands(client_id) "
            **/
            
            { body: cmds },
        )
        console.log('Slash commands successfully deployed !');
        } catch (e) {
          console.error(e);
        }
})();
