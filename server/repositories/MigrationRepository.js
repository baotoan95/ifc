const entities = require('../entities');

const init = async () => {
    await entities.User.sync({force: true});
    await entities.Wish.sync({force: true});
    return true;
}

const upgrade = async () => {
    await entities.User.sync({force: false});
    await entities.Wish.sync({force: false});
    return true;
}

module.exports = {
    init,
    upgrade
}