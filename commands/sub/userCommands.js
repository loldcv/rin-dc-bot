const { CommandGroup } = require('../commandGroup')
const { mentionUser } = require('../../helpers');

/**
 * @typedef {import('discord.js').Message} Discord.Message
 */

class UserCommands extends CommandGroup {

    /**
     * @param {Discord.Message} msg 
     */
    showAvatar(msg) {
        if (msg.rin_args.length > 0) {
            msg.guild.members.fetch({ query: msg.rin_args, limit: 1 })
                .then(res => {
                    msg.channel.send(res.entries().next().value[1].user.displayAvatarURL())
                })
                .catch(e => {
                    msg.channel.send(mentionUser(msg) + " I can not find that user.")
                });
        } else {
            msg.channel.send(mentionUser(msg) + " You did not specify a username to look for.")
        }
    }

}

exports.UserCommands = UserCommands;