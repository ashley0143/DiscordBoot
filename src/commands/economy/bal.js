const Command = require('../../structures/Command')
const Users = require('../../structures/models/Users')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'bal',
            description: 'Balance of user'
        })
    }
    run = async function(interaction) {
        const user = await Users.findOne({_id: interaction.member.id});
        const lang = this.client.lang({lang: user.lang || "pt-br", cmd: 'bal'});
        if(!user) return interaction.reply(lang.error);
        interaction.reply(`$${user.economy.coins}`)
   }
}
