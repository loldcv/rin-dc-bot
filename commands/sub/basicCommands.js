const { CommandGroup } = require('../commandGroup')
const { buildHelpCommandString, mentionUser } = require('../../helpers');

/**
 * @typedef {import('discord.js').Message} Discord.Message
 */

class BasicCommands extends CommandGroup {


    /**
     * Display available commands in an embed
     * @param {Discord.Message} msg 
     * @param {Object} commandList 
     */
    help(msg, commandList) {
        let desc_string = buildHelpCommandString(commandList);

        msg.channel.send(new this.Discord.MessageEmbed()
        .setTitle('Available commands')
        .setColor(0xFFC0CB)
        .setDescription(desc_string));
    }

    /**
     * Reply to user with "pong"
     * @param {Discord.Message} msg 
     */
    ping(msg) {
        msg.channel.send(mentionUser(msg) + ' Pong! (´∀｀)♡');
    }

    /**
     * Reciprocate feelings for user in a cheesy reply
     * @param {Discord.Message} msg 
     */
    iloveyou(msg) {
        msg.channel.send(mentionUser(msg) + ' I love you too! \u{1F495}')
    }

    /**
     * Return arguments passed to user
     * @param {Discord.Message} msg 
     */
    argstest(msg) {
        msg.channel.send(mentionUser(msg) + ' You provided these arguments: ' + msg.rin_args)
    }

}

exports.BasicCommands = BasicCommands;