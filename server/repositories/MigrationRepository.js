const entities = require('../entities');

const init = async () => {
    return await Promise.all([
        entities.User.sync({force: true}),
        entities.Wish.sync({force: true})
    ]);
}

const upgrade = async () => {
    return await [
            entities.User.sync({force: false}),
            entities.Wish.sync({force: false})
        ];
}

module.exports = {
    init,
    upgrade
}