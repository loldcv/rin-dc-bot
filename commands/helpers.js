const { CommandGroup } = require('./commandGroup')

//TODO: UNDERSTAND THIS PROPERLY
function getAllMethodNames(obj) {
    let methods = new Set();

    while (obj = Reflect.getPrototypeOf(obj)) {
        let keys = Reflect.ownKeys(obj)
        keys.forEach((k) => methods.add(k));
    }

    let m = new Set();
    let o = new CommandGroup();

    while (o = Reflect.getPrototypeOf(o)) {
        let ks = Reflect.ownKeys(o)
        ks.forEach((k) => m.add(k));
    }

    methods.forEach(item => {
        if (m.has(item)) methods.delete(item);
    })

    return methods;
}

exports.getAllMethodNames = getAllMethodNames;