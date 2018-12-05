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

const findByLoginToken = async (userId, loginToken) => {
    return await User.findOne({
        where: {
            id: userId,
            login_token: loginToken
        }
    })
}

const update = async (user) => {
    const userId = user.id;
    return await User.update({
        username: user.username,
        password: user.password,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        dob: user.dob,
        login_failed: user.login_failed,
        login_token: user.login_token,
        is_active: user.is_active,
        is_admin: user.is_admin,
        reset_password_token: user.reset_password_token,
        is_confirm: user.is_confirm,
        is_banned: user.is_banned,
        fb_id: user.fb_id,
        google_id: user.google_id
    }, {where: {id: userId}});
}

module.exports = {
    findAll,
    add,
    findOneByUsername,
    findOne,
    findByFacebookId,
    findByLoginToken,
    update
}