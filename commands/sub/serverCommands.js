const { CommandGroup } = require('../commandGroup')

/**
 * @typedef {import('discord.js').Message} Discord.Message
 */

class ServerCommands extends CommandGroup {

    /**
     * @param {Discord.Message} msg
     */
    changeServerRegion(msg) {
        msg.channel.send(new this.Discord.MessageEmbed()
        .setTitle('Available commands')
        .setColor(0xFFC0CB)
        .setDescription('hello'));
    }
    

}

exports.ServerCommands = ServerCommands;