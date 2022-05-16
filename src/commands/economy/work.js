const Command = require('../../structures/Command')
const Users = require('../../structures/models/Users')
const cooldown = new Set();
const cooldownTime = 30000; 
module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'work',
            description: 'Work to earn money!'
        })
    }
    run = async function(interaction) {
        const user = await Users.findOne({_id: interaction.member.id});
        if(!user) return interaction.reply("[Erro] Usuário não existe.");
        if(cooldown.has(interaction.user.id)) return interaction.reply({content:"😪 • Uff, você trabalhou muito, porque não descansa um pouco?", type: 'EPHEMERAL'});
        var random = Math.floor(Math.random(500) * 50000)
        user.economy.coins += random;
        user.save();
        interaction.reply(`👷 • Você trabalhou e conseguiu $${random}!`)
        cooldown.add(interaction.user.id);
        setTimeout(() => {
          cooldown.delete(interaction.user.id);
        }, cooldownTime);
        }
}
