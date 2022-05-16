const Command = require('../../structures/Command')
const Users = require('../../structures/models/Users')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: 'Mostra o ping do bot.'
        })
    }
    run = async (interaction) => {
        const user = await Users.findOne({_id: interaction.member.id});
        const lang = this.client.lang({lang: user.lang, cmd: 'ping'});
        const text = lang.replace("{ping}", this.client.ws.ping)
        interaction.reply({
            content: `${text}`,
            flags: "EPHEMERAL"
        })
        /*interaction.reply({
            content: `Atual ping de Ayu é \`${this.client.ws.ping}\`ms.`,
            flags: "EPHEMERAL"
        })*/
    }
}
