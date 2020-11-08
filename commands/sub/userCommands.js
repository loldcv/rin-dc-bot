const { CommandGroup } = require('../commandGroup');
const { mentionUser, fetchUser } = require('../../helpers');

/**
 * @typedef {import('discord.js').Message} Discord.Message
 */

class UserCommands extends CommandGroup {

    /**
     * @param {Discord.Message} msg 
     */
    showAvatar(msg) {
        if (msg.rin_args.length > 0) {
            fetchUser(msg, { query: msg.rin_args, limit: 1 }, (guildMember) => {
                msg.channel.send(guildMember.user.displayAvatarURL());
            }, (err) => {
                msg.channel.send(mentionUser(msg) + " I can not find that user.");
            });
        } else {
            msg.channel.send(mentionUser(msg) + " You did not specify a username to look for.");
        }
    }

    /**
     * @param {Discord.Message} msg 
     */
    changeColour(msg) {
        if (msg.rin_args.length > 0) {
            fetchUser(msg, msg.author.id, (guildMember) => {
                let colour = msg.rin_args.includes(' ') ? msg.rin_args.split(/ (.+)/)[0].toUpperCase() : msg.rin_args.toUpperCase();
                let roleManager = msg.guild.roles;
                let uniqueRole = roleManager.cache.find(r => r.members.size === 1 && r.members.find(m => m.id === msg.author.id));
                if (uniqueRole) {
                    uniqueRole.setColor(colour);
                } else {
                    if (!roleName) {
                        msg.channel.send(`${mentionUser(msg)} You do not have a unique role, and you did not specify a role name for a new role.`);
                        return;
                    }
                    roleManager.create({
                        data: {
                            name: roleName,
                            color: colour,
                        },
                        reason: `Requested by ${msg.author.username}`,
                    })
                        .then(r => {
                            guildMember.roles.add(r);
                        });
                }
            }, (err) => {
                msg.channel.send(mentionUser(msg) + " You fucked it up.");
            });
        }
        else {
            msg.channel.send(`${mentionUser(msg)} You did not specify a colour.`);
        }
    }

    /**
     * @param {Discord.Message} msg 
     */
    changeRoleName(msg) {
        if (msg.rin_args.length > 0) {
            fetchUser(msg, msg.author.id, (guildMember) => {
                let roleManager = msg.guild.roles;
                let uniqueRole = roleManager.cache.find(r => r.members.size === 1 && r.members.find(m => m.id === msg.author.id));
                if (uniqueRole) uniqueRole.setName(msg.rin_args);
            }, (err) => {
                msg.channel.send(mentionUser(msg) + " You fucked it up.");
            });
        } else {
            msg.channel.send(mentionUser(msg) + " You did not specify the new role name.");
        }
    }
}

exports.UserCommands = UserCommands;