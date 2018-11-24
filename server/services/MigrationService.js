const migrationRepository = require('../repositories/MigrationRepository');
const GenericResponse = require('../common/GenericResponse');
const ResponseStatus = require('../common/ResponseStatus');

const init = async () => {
    try {
        const rs = await migrationRepository.init();
        if(rs) {
            return new GenericResponse(ResponseStatus.ACKNOWLEDGED, 'database tables created');
        }
    } catch (err) {
        return new GenericResponse(ResponseStatus.INTERNAL_ERROR, err);
    }
}

const upgrade = async () => {
    try {
        const rs = await migrationRepository.upgrade();
        if(rs) {
            return new GenericResponse(ResponseStatus.ACKNOWLEDGED, null, rs);
        }
    } catch (err) {
        return new GenericResponse(ResponseStatus.INTERNAL_ERROR, err);
    }
}

module.exports = {
    init,
    upgrade
}