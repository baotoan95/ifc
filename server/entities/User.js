const DatabaseConstants = require('../constants/DatabaseConstants');
const Sequelize = require('sequelize');
const Sequelizer = require('../initilizations/Sequelizer').sequelize;

const User = Sequelizer.define(DatabaseConstants.USER_TABLE, {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    username: { type: Sequelize.STRING(30) },
    password: { type: Sequelize.STRING(40) },
    email: { type: Sequelize.STRING(255) },
    name: { type: Sequelize.STRING(255) },
    avatar: { type: Sequelize.STRING(500) },
    dob: { type: Sequelize.DATE },
    login_failed: { type: Sequelize.SMALLINT },
    is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    is_admin: { type: Sequelize.BOOLEAN },
    reset_password_token: { type: Sequelize.STRING(255) },
    is_confirm: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    is_banned: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    fb_id: {
        type: Sequelize.INTEGER
    },
    google_id: {
        type: Sequelize.INTEGER
    }
}, {
        underscored: true,
        freezeTableName: true,
        timestamps: true
    }
);

module.exports = User;