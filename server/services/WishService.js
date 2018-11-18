const wishRepository = require('../repositories/WishRepository');
const GenericResponse = require('../common/GenericResponse');
const ResponseStatus = require('../common/ResponseStatus');

const addWish = async (wish) => {
    wish.code = new Date().getTime();
    const newWish = await wishRepository.add(wish);
    if(newWish) {
        return new GenericResponse(ResponseStatus.ACKNOWLEDGED, null, newWish);
    } else {
        return new GenericResponse(
            ResponseStatus.INTERNAL_ERROR,
            'Server error, please try doing it again!',
            e
        )
    }
}

const updateWish = async (wish) => {
    const newWish = await wishRepository.update(wish);
    if(newWish) {
        return new GenericResponse(ResponseStatus.ACKNOWLEDGED, null, newWish);
    } else {
        return new GenericResponse(
            ResponseStatus.INTERNAL_ERROR,
            'Server error, please try doing it again!',
            e
        )
    }
}

module.exports = {
    addWish,
    updateWish
}