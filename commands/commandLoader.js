const { BasicCommands } = require('./sub/basicCommands')
const { ServerCommands } = require('./sub/serverCommands')

class CommandLoader {
    constructor(Discord, client) {
        this.basicCommands = new BasicCommands(Discord, client);
        this.serverCommands = new ServerCommands(Discord, client);
    
        this.commandList = {
            'help': msg => this.basicCommands.help(msg, this.commandList),
            'ping': msg => this.basicCommands.ping,
            'server': {
                'change': {
                    'region': msg => this.serverCommands.changeServerRegion(msg),
                }
            },
            'args': msg => this.basicCommands.argstest,
            'i': {
                'love': {
                    'you': msg => this.basicCommands.iloveyou
                }
            },
        }
    }
}

exports.CommandLoader = CommandLoader;