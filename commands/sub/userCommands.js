const { CommandGroup } = require('../commandGroup')
const { mentionUser } = require('../../helpers');

/**
 * @typedef {import('discord.js').Message} Discord.Message
 */

class UserCommands extends CommandGroup {

    /**
     * 
     * @param {Discord.Message} msg 
     */
    showAvatar(msg) {
        //console.log(msg.guild.members);
        if(msg.mentions.members.size > 0) msg.channel.send(msg.mentions.members.first().user.displayAvatarURL());
        else msg.channel.send(mentionUser(msg) + " I either can't find that user or you did not mention anybody.");
    }

}

exports.UserCommands = UserCommands;