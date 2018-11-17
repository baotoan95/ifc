const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const FilePathConstants = require('../constants/FilePathConstants');

function _initialize() {
    let configs;
    try {
        let configPath = path.resolve(__dirname, '', FilePathConstants.APP_CONFIG);
        configs = yaml.safeLoad(fs.readFileSync(configPath, 'utf8'));

        if(configs) {
            this.configs = configs;
        } else {
            throw new Error('There is no config from application.yml');
        }
    } catch (ex) {
        throw new Error('Error when read the application.yml');
    }
}

function AppConfig() {
    this.initialize = _initialize;
    this.initialize();
}

module.exports = new AppConfig();