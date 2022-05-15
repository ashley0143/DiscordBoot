const Command = require('../../structures/Command')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'timeout',
            description: 'Keep timeouted user on your server',
            nameLocalizations: {"pt-BR": "ausente", "en-US": "timeout"}
            
        })
    }
    run = (interaction) => {
     
    }
}
