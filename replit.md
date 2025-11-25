# Discord Bot Project

## Overview
This is a Discord bot with a web interface that responds to slash commands in Discord servers.

## Project Structure
- `index.js` - Main file containing both the Express web server and Discord bot logic
- `.env` - Contains Discord bot credentials (TOKEN, CLIENT_ID, GUILD_ID)
- `package.json` - Node.js dependencies

## Features
- Web server on port 5000 that displays a simple greeting
- Discord bot that responds to `/test` command with "working! :)"
- Automatic slash command registration

## Running the Project
The workflow "Start Discord Bot" runs automatically with the command: `node index.js`

## Environment Variables Required
- `TOKEN` - Discord bot token
- `CLIENT_ID` - Discord application client ID
- `GUILD_ID` - Discord server (guild) ID where commands are registered

## Current Status
- Bot logged in as: dev-badge#6296
- Server running on port 5000
- Slash commands registered successfully
