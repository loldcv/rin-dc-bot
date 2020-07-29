const { CommandGroup } = require('../commandGroup')
const { mentionUser } = require('../../helpers');

/**
 * @typedef {import('discord.js').Message} Discord.Message
 */

class ServerCommands extends CommandGroup {

    /**
     * If args are provided: Attempt to change server region
     * If no args provided: Display instructions and available regions to change to
     * @param {Discord.Message} msg
     */
    changeServerRegion(msg) {
        let fieldString = "";

        if(!msg.guild) {
            msg.channel.send(mentionUser(msg) + " That command doesn't work here.")
            return;
        }

        msg.guild.fetchVoiceRegions().then(r => {
            let regions = r.keys();
            let current_region = msg.guild.region;

            let counter = 0;
            for (let item of regions) {
                if (counter === 5) {
                    fieldString += "\n";
                    counter = 0;
                }
                else fieldString += "`" + item + "`" + " ";
                counter++;
            }

            //if we do have args, try to set server region
            if(msg.rin_args.length > 0) {
                if(r.has(msg.rin_args.split(' ')[0])) {
                    msg.guild.setRegion(msg.rin_args.split(' ')[0]).then(res => {
                        msg.channel.send(mentionUser(msg) + " I changed the server region to " + msg.guild.region + " for you.")
                    }).catch(e => {
                        msg.channel.send(mentionUser(msg) + " Sorry, looks like I failed to change the server region.")
                    })
                } else {
                    msg.channel.send(mentionUser(msg) + " Sorry, but that is not a valid server region.")
                }
            } else {
                msg.channel.send(new this.Discord.MessageEmbed()
                .setTitle('Which region do you want to change to?')
                .setColor(0xFFC0CB)
                .setDescription('Please provide the name of a valid voice region as an argument.\n_For example "rin server change region europe"_\n\nThe current server region is `' + msg.guild.region + '`.')
                .addFields({ name: 'Available regions:', value: fieldString }));
            }
        }).catch(e => {
            msg.channel.send(mentionUser(msg) + " I was unable to retrieve any server regions.")
        });
    }


}

exports.ServerCommands = ServerCommands;