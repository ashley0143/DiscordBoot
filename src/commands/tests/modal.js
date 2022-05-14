const Command = require('../../structures/Command')
const Discord = require('discord.js');
module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'modal',
            description: 'test modal'
        })
    }
    run = (interaction) => {
     const modal = new Discord.Modal()
      .setTitle("Test Modal")
      .setCustomId("1");
      interaction.reply({content: "Test", components: [row]})
    }
}
