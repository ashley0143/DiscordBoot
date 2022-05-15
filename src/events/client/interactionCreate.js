const Event = require('../../structures/Event')
const User = require('../../structures/models/Users')

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: 'interactionCreate'
        })
    }
    run = async (interaction) => {
        if (interaction.isCommand()) {
          const user = await User.findOne({_id: interaction.member.id});
          if(!user) {
           new User({_id: interaction.member.id,
			lang: "pt-br",
			about: "Olá, parece que ainda não tenho um sobre mim!",
			economy: {
				coins: 500
			}
           }).save()
          }
          const cmd = this.client.commands.find(c => c.name === interaction.commandName)
            if (cmd) {
             cmd.run(interaction)
            }
        }
    }
}
