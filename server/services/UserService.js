const userRepository = require('../repositories/UserRepository');
const GenericResponse = require('../common/GenericResponse');
const ResponseStatus = require('../common/ResponseStatus');
const bcrypt = require('bcrypt');

const findAll = async () => {
    try {
        const users = await userRepository.findAll();
        return new GenericResponse(
            ResponseStatus.ACKNOWLEDGED,
            null,
            users
        );
    } catch (e) {
        return new GenericResponse(
            ResponseStatus.INTERNAL_ERROR,
            'Server error, please try doing it again!',
            e
        )
    }
}

const addUser = async (user) => {
    try {
        // Validation form
        if(!user.username || !user.password) {
            return new GenericResponse(
                ResponseStatus.BAD_REQUEST,
                'Username and password are required'
            )
        }
        const existedUser = await userRepository.findOneByUsername(user.username);
        if(existedUser) {
            return new GenericResponse(
                ResponseStatus.BAD_GATEWAY,
                'Username is existed in the system, please select a new one.'
            )
        }
        if(user.password) {
            const saltRounds = 10;
            const hashedPassword = await new Promise((resolve, reject) => {
                bcrypt.hash(user.password, saltRounds, function(err, hash) {
                  if (err) reject(err)
                  resolve(hash)
                });
            });
            try {
                user.password = hashedPassword;
                const newUser = await userRepository.add(user);
                return new GenericResponse(
                    ResponseStatus.ACKNOWLEDGED,
                    null,
                    newUser
                );
            } catch(err) {
                console.log('addUser', err);
                return new GenericResponse(
                    ResponseStatus.INTERNAL_ERROR,
                    'Server error, please try doing it again!',
                    err
                )
            }
        } else {
            return new GenericResponse(
                ResponseStatus.BAD_REQUEST,
                'Password is required'
            )
        }
    } catch (e) {
        console.log('addUser', e);
        return new GenericResponse(
            ResponseStatus.INTERNAL_ERROR,
            'Server error, please try doing it again!',
            e
        )
    }
}

const findByUsername = async (username) => {
    return await userRepository.findOneByUsername(username);
}

const findById = async (userId) => {
    return await userRepository.findOne(userId);
}

const addUserWithFacebook = async (fbProfile, accessToken) => {
    const existedUser = await userRepository.findByFacebookId(fbProfile.id);
    if(!existedUser) {
        const user = {
            name: fbProfile.displayName,
            fb_id: fbProfile.id,
            avatar: fbProfile._json.picture.data.url,
            login_token: accessToken
        }
        return await userRepository.add(user);
    } else {
        existedUser.dataValues.login_token = accessToken;
        await userRepository.update(existedUser.dataValues);
        return existedUser.dataValues;
    }
}

const findByLoginToken = async (userId, loginToken) => {
    try {
        const user = await userRepository.findByLoginToken(userId, loginToken);
        if(user) {
            user.login_token = null;
            await userRepository.update(user.dataValues);
            return user;
        }
    } catch (err) {
        console.log('findByLoginToken', err);
        return null;
    }
}

module.exports = {
    findAll,
    addUser,
    findByUsername,
    findById,
    addUserWithFacebook,
    findByLoginToken
}