import {configDotenv} from "dotenv";
import {Client, IntentsBitField, Events} from "discord.js";

configDotenv()

const TOKEN = process.env.DISCORD_TOKEN;

const client = new Client({intents: [
        IntentsBitField.Flags.Guilds
    ]})

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
})

client.login(TOKEN);