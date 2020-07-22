exports.buildHelpCommandString = (obj, suffix = "") => {
    let desc_string = "";

    Object.keys(obj).forEach(item => {
        if (typeof obj[item] === 'function') {
            desc_string += "rin " + suffix + item + "\n";
        }
    });

    Object.keys(obj).forEach(item => {
        if (typeof obj[item] === 'object') {
            desc_string += this.buildHelpCommandString(obj[item], suffix + item + " ")
        }
    })

    return desc_string;
}

exports.mentionUser = (msg) => {
    return '<@' + msg.author.id + '>';
}