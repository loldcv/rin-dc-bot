const { CommandGroup } = require('../commandGroup')
const { getAllMethodNames } = require('../helpers');

class BasicCommands extends CommandGroup {

    help(msg, commandLoaderInstance) {
        let desc_string = "";

        Object.keys(commandLoaderInstance).forEach(commandType => {

            if(commandType === "basicCommands") {
                getAllMethodNames(commandLoaderInstance[commandType]).forEach(command => {
                    desc_string += "rin " + command + "\n";
                });
            }
        })

        const embed = new this.Discord.MessageEmbed()
            .setTitle('Available commands')
            .setColor(0xFFC0CB)
            .setDescription(desc_string);
        // Send the embed to the same channel as the message
        msg.channel.send(embed);
    }

    ping(msg) {
        msg.reply(' Pong! (´∀｀)♡');
    }
}

exports.BasicCommands = BasicCommands;