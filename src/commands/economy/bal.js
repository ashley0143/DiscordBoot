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
        if(!user) return interaction.reply("[Erro] Usuário não existe.");
        message.reply(`$${user.economy.coins}`)
   }
}
