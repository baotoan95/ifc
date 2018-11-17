const User = require('../entities/User');

const findAll = async () => {
    return await User.findAll();
}

const add = async (user) => {
    return await User.create(user);
}

module.exports = {
    findAll,
    add
}