const { CommandGroup } = require('../commandGroup')
const { mentionUser } = require('../../helpers');

/**
 * @typedef {import('discord.js').Message} Discord.Message
 */

class ServerCommands extends CommandGroup {

    /**
     * @param {Discord.Message} msg
     */
    changeServerRegion(msg) {
        let fieldString = "";

        msg.guild.fetchVoiceRegions().then(r => {
            let regions = r.keys();
            let current_region = msg.guild.region;

            for (let item of regions) {
                if (item === current_region) fieldString += "**[" + item + "]**" + " \u{2B05}\n"
                else fieldString += item + " \n"
            }

            //if we do have args, try to set server region
            if(msg.rin_args.length > 0) {
                msg.guild.setRegion(msg.rin_args.split(' ')[0]).then(res => {
                    msg.channel.send(mentionUser(msg) + " I changed the server region to " + msg.guild.region + " for you.")
                }).catch(e => {
                    msg.channel.send(mentionUser(msg) + " Sorry, looks like I failed to change the server region.")
                })
            } else {
                msg.channel.send(new this.Discord.MessageEmbed()
                .setTitle('Which region do you want to change to?')
                .setColor(0xFFC0CB)
                .setDescription('Please provide the name of a valid voice region as an argument.\n(For example "rin server change region europe")\n\nThe current server region is marked.')
                .addFields({ name: 'Available regions:', value: fieldString }));
            }
        });
    }


}

exports.ServerCommands = ServerCommands;