const Client = require('./src/structures/Client')

const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_VOICE_STATES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES'
    ]
})

module.exports = client;
// console.log(client.commands);
client.login(process.env.token)


const express = require('express');
const { InteractionType, InteractionResponseType, verifyKeyMiddleware } = require('discord-interactions');

const app = express();

app.post('/interactions', verifyKeyMiddleware(process.env.CLIENT_PUBLIC_KEY), (req, res) => {
  const interaction = req.body;
  if (interaction.type === InteractionType.APPLICATION_COMMAND) {
    res.send({
      type: InteractionResponseType.APPLICATION_MODAL,
      data: {
        title: 'Test',
        custom_id: 'test-modal',
        components: [
          {
            type: 1,
            components: [
              {
                type: 4,
                style: 1,
                label: 'Short Input',
                custom_id: 'short-input',
                placeholder: 'Short Input',
              },
            ],
          },
          {
            type: 1,
            components: [
              {
                type: 4,
                style: 1,
                label: 'Paragraph Input',
                custom_id: 'paragraph-input',
                placeholder: 'Paragraph Input',
                required: false,
              },
            ],
          },
        ],
      },
    });
  }
});
app.listen(3000)
