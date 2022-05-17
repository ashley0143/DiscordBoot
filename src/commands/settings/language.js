const Command = require('../../structures/Command')
const Users = require('../../structures/models/Users')


module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'language',
            description: 'Altere idioma do bot para seu cliente.',
            options: [{
             name: 'language',
             type: "STRING",
             description:'Idioma para ser alterado',
             required:true,
             choices: [{name: "Portugues Brasileiro", value: "pt-br"}, {name: "Inglês Americano", value: "en-us"}]
            }]
        })
    }
    run = async (interaction) => {
        const user = await Users.findOne({_id: interaction.member.id});
        user.lang = interaction.options.getString('language');
        user.save()
        const lang = this.client.lang({lang: user.lang, cmd: 'language'})
        interaction.reply(lang.text)
    }
}
