const Discord = require('discord.js');
const client = new Discord.Client();
const { CommandLoader } = require('./commands/commandLoader')
const { mentionUser } = require('./helpers');
require('dotenv').config();

// log in with token
client.login(process.env.TOKEN);

// load commands
const commandLoader = new CommandLoader(Discord, client);
const commands = commandLoader.commandList;

// hello message
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// handle user commands
client.on('message', msg => {

  // only react to messages meant for rin and not sent by rin
  if (!msg.content.toLowerCase().startsWith('rin') || msg.author.id === client.user.id) return;

  // turn string into array of strings
  const exploded = msg.content.toLowerCase().split(" ");

  //navigate to command function, skip "rin" in string array
  let func = commands;
  for (let i = 1; i < exploded.length; i++) {

    if (!!func[exploded[i]]) func = func[exploded[i]]

    if (typeof func === 'function') {
      
      //attach user args as var to message
      msg.rin_args = msg.content.slice(msg.content.indexOf(exploded[i]) + exploded[i].length + 1)

      func(msg);
      return;
    }
  }

  msg.channel.send(mentionUser(msg) + ' This command does not exist.');

});