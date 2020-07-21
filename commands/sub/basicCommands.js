const { CommandGroup } = require('../commandGroup')


class BasicCommands extends CommandGroup {

    help(msg, commandList) {
        let desc_string = this.buildCommandTree(commandList);

        console.log(desc_string);

        const embed = new this.Discord.MessageEmbed()
            .setTitle('Available commands')
            .setColor(0xFFC0CB)
            .setDescription(desc_string);
        // Send the embed to the same channel as the message
        msg.channel.send(embed);
    }

    buildCommandTree(obj, suffix = "") {
        let desc_string = "";
        Object.keys(obj).forEach(item => {
            if (typeof obj[item] === 'function') {
                desc_string += "rin " + suffix + item + "\n";
            }
        });

        Object.keys(obj).forEach(item => {
            if (typeof obj[item] === 'object') {
                desc_string += this.buildCommandTree(obj[item], desc_string, item + " ")
            }
        })

        return desc_string;
    }

    ping(msg) {
        msg.reply(' Pong! (´∀｀)♡');
    }

    iloveyou(msg) {
        msg.reply(' I love you too \u{1F495}')
    }

}

exports.BasicCommands = BasicCommands;