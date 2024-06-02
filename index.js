const { Client, Events, GatewayIntentBits } = require("discord.js");
const fs = require('node:fs');
const path = require('node:path');
require('dotenv').config({ path: 'data/.env' });

const config = {
    token: process.env.DISCORD_TOKEN

}
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();


client.once(Events.ClientReady, readyclient => {
    console.log(`Ready! Logged as ${readyclient.user.tag} `);
})

client.login(config.token);