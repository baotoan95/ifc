const entities = require('../entities');

const init = async () => {
    return await entities.User.sync({force: true});
}

const upgrade = async () => {
    return await entities.User.sync({force: false});
}

module.exports = {
    init,
    upgrade
}