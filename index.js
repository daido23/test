const { Client, Events, GatewayIntentBits } = require("discord.js");

require('dotenv-flow').config();

const config = {
    token: process.env.DISCORD_TOKEN

}
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once(Events.ClientReady, readyclient => {
    console.log(`Ready! Logged as ${readyclient.user.tag} `);
})

client.login(config.token);