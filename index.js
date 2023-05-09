import 'dotenv/config';
import { Client, GatewayIntentBits, Partials, userMention } from 'discord.js';
import { Routes } from 'discord-api-types/v10';
import { REST } from '@discordjs/rest';
import { space, rewind, forward } from './commands.js';
import ks from 'node-key-sender';

const clientId = process.env.DISCORD_CLIENT_ID;
const guildId = process.env.DISCORD_GUILD_ID;
const token = process.env.DISCORD_TOKEN;
const commands = [ space, rewind, forward ];

const client = new Client({ intents: [GatewayIntentBits.Guilds], partials: [Partials.Channel] });
const rest = new REST({ version: '10' }).setToken(token);

const registerCommands = async () => {
    try {
        await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });
        console.log('Successfully registered application commands.');
    } catch (e) {
        console.error(e);
    }
}
registerCommands();

client.on('interactionCreate', async interaction => {

	const { member, commandName, options } = interaction;

    switch (commandName) {
        case 'space': ks.sendKey('space'); break;
        case 'rewind': for (let i = 0; i < (options.getNumber('count') || 1); i++) ks.sendKey('left'); break;
        case 'forward': for (let i = 0; i < (options.getNumber('count') || 1); i++) ks.sendKey('right'); break;
    };

    await interaction.reply(`Did ${commandName}, ${userMention(member?.id)}. :)`)
});

client.login(token);