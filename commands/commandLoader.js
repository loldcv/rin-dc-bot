const { BasicCommands } = require('./sub/basicCommands');
const { ServerCommands } = require('./sub/serverCommands');
const { RaidCommands } = require('./sub/raidCommands');
const { UserCommands } = require('./sub/userCommands');

class CommandLoader {
    constructor(Discord, client) {
        this.basicCommands = new BasicCommands(Discord, client);
        this.serverCommands = new ServerCommands(Discord, client);
        this.raidCommands = new RaidCommands(Discord, client);
        this.userCommands = new UserCommands(Discord, client);

        this.commandList = {
            'help': msg => this.basicCommands.help(msg, this.commandList),
            // 'ping': msg => this.basicCommands.ping(msg),
            'colour': msg => this.userCommands.changeColour(msg),
            'color': msg => this.userCommands.changeColour(msg),
            'role': {
                'name': msg => this.userCommands.changeRoleName(msg),
            },
            'user': {
                'avatar': msg => this.userCommands.showAvatar(msg),
            },
            'server': {
                'change': {
                    'region': msg => this.serverCommands.changeServerRegion(msg),
                }
            },
            // 'args': msg => this.basicCommands.argstest(msg),
            'i': {
                'love': {
                    'you': msg => this.basicCommands.iloveyou(msg)
                }
            },
        };
    }
}

exports.CommandLoader = CommandLoader;