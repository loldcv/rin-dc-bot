const Discord = require('discord.js');
const client = new Discord.Client();
const { CommandLoader } = require('./commands/commandLoader')
require('dotenv').config();

// log in as rin
client.login(process.env.TOKEN);

// load commands
const commandLoader = new CommandLoader(Discord, client);
const commands = commandLoader.commandList;

// hello message
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// commands i guess
client.on('message', msg => {
  // only react to messages meant for rin
  if(msg.content.toLowerCase().startsWith('rin')) {
    // only react to messages not sent by rin
    if (msg.author.id !== client.user.id) {
      // turn string into array of strings
      let exploded = msg.content.split(" ");
      
      let func = commands;
      //navigate to function, skip "rin" in string array
      for(let i = 1; i < exploded.length; i++) {
        if(!!func[exploded[i]]) func = func[exploded[i]]
      }

      if (typeof func !== 'function') {
        msg.reply(' This command does not exist.')
      } else {
        func(msg);
      }
    }
  }
});