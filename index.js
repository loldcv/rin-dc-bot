const Discord = require('discord.js');
const client = new Discord.Client();
const { CommandLoader } = require('./commands/commandLoader')
require('dotenv').config();

// log in as rin
client.login(process.env.TOKEN);

// load commands
const commands = new CommandLoader(Discord, client);

// hello message
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// commands i guess
client.on('message', msg => {
  // only react to messages not sent by rin
  if (msg.author.id !== client.user.id) {
    if(msg.content.toLowerCase().startsWith('rin help')) commands.basicCommands.help(msg, commands);
    if(msg.content.toLowerCase().startsWith('rin ping')) commands.basicCommands.ping(msg);
  }
});