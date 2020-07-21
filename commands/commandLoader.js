const { BasicCommands } = require('./sub/basicCommands')

class CommandLoader {
    constructor(Discord, client) {
        this.basicCommands = new BasicCommands(Discord, client);
    }
}

exports.CommandLoader = CommandLoader;