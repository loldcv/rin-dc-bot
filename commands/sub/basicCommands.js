const { CommandGroup } = require('../commandGroup')
const { buildHelpCommandString, mentionUser } = require('../../helpers');


class BasicCommands extends CommandGroup {

    help(msg, commandList) {
        let desc_string = buildHelpCommandString(commandList);

        msg.channel.send(new this.Discord.MessageEmbed()
        .setTitle('Available commands')
        .setColor(0xFFC0CB)
        .setDescription(desc_string));
    }

    ping(msg) {
        msg.channel.send(mentionUser(msg) + ' Pong! (´∀｀)♡');
    }

    iloveyou(msg) {
        msg.channel.send(mentionUser(msg) + ' I love you too \u{1F495}')
    }

}

exports.BasicCommands = BasicCommands;