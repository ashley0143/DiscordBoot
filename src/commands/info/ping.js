const Command = require('../../structures/Command')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: 'Mostra o ping do bot.'
        })
    }
    run = (interaction) => {
        console.log(this.client.commands)
        interaction.reply({
            content: `Atual ping de Ayu é \`${this.client.ws.ping}\`ms.`,
            ephemeral: true
        })
    }
}
