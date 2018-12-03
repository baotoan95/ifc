const User = require('../entities/User');

const findAll = async () => {
    return await User.findAll();
}

const add = async (user) => {
    return await User.create(user);
}

const findOneByUsername = async (username) => {
    return await User.findOne(
        {
            where: {
                username: username
            }
        }
    );
}

const findOne = async (userId) => {
    return await User.findByPk(userId);
}

const findByFacebookId = async (fbId) => {
    return await User.findOne({
        where: {
            fb_id: fbId
        }
    });
}

module.exports = {
    findAll,
    add,
    findOneByUsername,
    findOne,
    findByFacebookId
}