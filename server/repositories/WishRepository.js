const Wish = require('../entities/Wish');

const add = async (wish) => {
    return await Wish.create(wish);
}

const update = async (wish) => {
    return await Wish.update(wish);
}

const get = async (code) => {
    return await Wish.findOne({
        where: {
            code: code
        }
    })
}

module.exports = {
    add,
    update,
    get
}