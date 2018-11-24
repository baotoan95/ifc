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
        if(user.password) {
            user.password = bcrypt.hash(user.password, 10, (err, hash) => {
                const newUser = await userRepository.add(user);
                return new GenericResponse(
                    ResponseStatus.ACKNOWLEDGED,
                    null,
                    newUser
                );
            });
        } else {
            return new GenericResponse(
                ResponseStatus.BAD_REQUEST,
                'Password is required'
            )
        }
    } catch (e) {
        return new GenericResponse(
            ResponseStatus.INTERNAL_ERROR,
            'Server error, please try doing it again!',
            e
        )
    }
}

module.exports = {
    findAll,
    addUser
}