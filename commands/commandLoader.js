const { BasicCommands } = require('./sub/basicCommands')

class CommandLoader {
    constructor(Discord, client) {
        this.basicCommands = new BasicCommands(Discord, client);
    
        this.commandList = {
            'help': msg => this.basicCommands.help(msg, this.commandList),
            'ping': this.basicCommands.ping,
            'one': {
                'two': {
                    'three': {
                        'four': function() {}
                    }
                }
            }
        }
    }
}

exports.CommandLoader = CommandLoader;