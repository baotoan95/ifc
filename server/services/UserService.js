const userRepository = require('../repositories/UserRepository');
const GenericResponse = require('../common/GenericResponse');
const ResponseStatus = require('../common/ResponseStatus');

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
    console.log('Creating user', user);
    try {
        const newUser = await userRepository.add(user);
        return new GenericResponse(
            ResponseStatus.ACKNOWLEDGED,
            null,
            newUser
        );
    } catch (e) {
        console.log(e);
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