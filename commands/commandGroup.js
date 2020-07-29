class CommandGroup {

    /**
     * @param {import('discord.js')}  Discord 
     * @param {import('discord.js').Client} client 
     */
    constructor(Discord, client) {
        this.Discord = Discord;
        this.client = client
    }
}

exports.CommandGroup = CommandGroup;