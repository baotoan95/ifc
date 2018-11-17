const Wish = require('../entities/Wish');

const add = async (wish) => {
    return await Wish.create(wish);
}

const update = async (wish) => {
    return await Wish.update(wish);
}

const get = async (code) => {
    return await Wish.findAll({
        where: {
            code: code
        },
        limit: 1
    })
}

module.exports = {
    add,
    update
}