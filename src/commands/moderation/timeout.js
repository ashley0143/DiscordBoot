const Command = require('../../structures/Command')
const { Permissions } = require('discord.js');
const ms = require('ms');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'timeout',
            description: 'Keep timeouted user on your server',
            options: [
                {
                    name: 'user',
                    type: 'USER',
                    description: 'User to be timeout.',
                    required: true
                },
                {
                    name: 'time',
                    type: 'STRING',
                    description: 'Time for user to be timeouted ',
                    required:true,
                    choices: [{name: "One week", value: "7d"}, {name: "1 Day", value:"1d"}, {name: "One hour", value: "1h"}, {name: "One minute", value:"1m"}]
                }
             ]
        })
    }
    run = (interaction) => {
      const member = interaction.options.getMember('user');
      const user = interaction.member;
      if (!user.permissions.has(Permissions.FLAGS.MODERATE_MEMBERS)) return interaction.reply({content: `[ERRO] Você não pode usar esse comando apenas ADMINs e usuarios com permissão \`\`MODERATE_MEMBERS\`\`!`, ephemeral:true});
      if (!interaction.guild.me.permissions.has(Permissions.FLAGS.MODERATE_MEMBERS)) return interaction.reply({ content: `[ERRO] Eu não posso executar esse comando pois não tenho permissão \`\`MODERATE_MEMBERS\`\`!`, ephemeral: true });
      const tempo = ms(interaction.options.getString("tempo"));
      const time = new Date(Date.now() + tempo);
      if(!member) return interaction.reply("[ERRO] Não consegui achar o usuário, verifique se está tudo correto.", {ephemeral:true});
      if(user.id === member.id) return message.reply("Não posso te silenciar");
      if(!tempo) return interaction.reply("[ERRO] Coloque um tempo válido!", {ephemeral:true});
      member.timeout(tempo, "Requested by: " + user.username).then(inter => {
       interaction.reply(`:mute: | ${member.user.username} foi silenciado!\n:rolling_eyes: | Motivo: ${text}\n:timer: | Será retirado <t:${Math.floor(time.getTime() / 1000)}:R>`);
      }).catch(err => {
       interaction.reply(`[ERRO] Não consegui silenciar o usuario.`, {ephemeral:true})
      })
    }
}
