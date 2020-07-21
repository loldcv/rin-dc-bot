const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

// log in as rin
client.login(process.env.TOKEN);

// hello message
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// commands i guess
client.on('message', msg => {
  if (msg.content.includes('ping')) {
    msg.reply(' pong');
  }
});