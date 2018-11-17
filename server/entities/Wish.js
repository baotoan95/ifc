const DatabaseConstants = require('../constants/DatabaseConstants');
const Sequelize = require('sequelize');
const Sequelizer = require('../initilizations/Sequelizer').sequelize;

const Wish = Sequelizer.define(DatabaseConstants.WISH_TABLE, {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    message: { type: Sequelize.STRING(30) },
    background_sound: { type: Sequelize.STRING(40) },
    user_id: { type: Sequelize.INTEGER },
    code: { type: Sequelize.STRING(50) }
}, {
    underscored: true,
    freezeTableName: true,
    timestamps: true
})

module.exports = Wish;

