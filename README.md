# Stream Bot

A keystroke-based bot designed for usage during streaming or screen sharing. 

----

## Requisites 

You must have the following installed/enabled: 

1. [NodeJS](https://nodejs.org/en)
2. An Application in [Discord Developer Portal](https://discord.com/developers) 

## Variables

Create a dotenv file with the following variables in place: 

* **DISCORD_TOKEN** - Token provided by the Discord Application
* **DISCORD_CLIENT_ID** - Client ID provided by the Discord Application
* **DISCORD_GUILD_ID** - ID of your Chosen Discord Server


## Setup

Run the following commands:

`npm install`

`npm start`

## Commands

`/space` - Function of backspace; pauses/plays media

`/forward :count` - Function of arrow key; forwards with an option # of times

`/rewind :count` - Function of arrow key; rewinds with an optional # of times