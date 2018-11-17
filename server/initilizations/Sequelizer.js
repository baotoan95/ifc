const Sequelize = require('sequelize');
const appConfig = require('./AppConfig').configs;

const _initialize = function() {
    const sequelize = new Sequelize(
        appConfig.database.name,
        appConfig.database.username,
        appConfig.database.password,
        {
            host: appConfig.database.host,
            port: appConfig.database.port,
            dialect: appConfig.database.dialect,
            pool: {
                max: appConfig.database.maxConn,
                min: appConfig.database.minConn,
                acquire: appConfig.database.acquire,
                idle: appConfig.database.idle
            },
            logging: appConfig.database.logging,
            operatorsAliases: appConfig.database.useAliases
        }
    );

    sequelize.authenticate()
        .then(async () => {
            console.info('Database connection has been established');
        })
        .catch((err) => {
            console.error(`Unable to connect to the database: ${err}`);
        });
    
    this.sequelize = sequelize;
}

function Sequelizer() {
    this.initialize = _initialize;
    this.initialize();
}

module.exports = new Sequelizer();