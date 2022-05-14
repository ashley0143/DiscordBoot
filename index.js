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
const { InteractionType, InteractionResponseType, verifyKeyMiddleware } = requirdiscord-interactions')');

const app = express();

app.post('/interactions', verifyKeyMiddleware(process.env.CLIENT_PUBLIC_KEY), (req, res) => {
  const interaction = req.console.log(interaction)      },
        ],
      },
    });
  }
});
app.listen(3000)
