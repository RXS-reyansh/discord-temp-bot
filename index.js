const express = require("express");
const app = express();

// Root route (optional)
app.get("/", (req, res) => {
  res.send("Hello from Musicium!");
});

// UptimeRobot ping route
app.get("/ping", (req, res) => {
  res.status(200).send("Bot is alive");
});

// Use dynamic port for Render or fallback for local dev
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const { Client, GatewayIntentBits, Events, REST, Routes, SlashCommandBuilder } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === 'test') {
    await interaction.reply('working! :)');
  }
});

client.login(process.env.TOKEN);

// Register slash command
const commands = [
  new SlashCommandBuilder()
    .setName('test')
    .setDescription('Replies!')
].map(cmd => cmd.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    );
    console.log('Slash command registered!');
  } catch (error) {
    console.error(error);
  }
})();
