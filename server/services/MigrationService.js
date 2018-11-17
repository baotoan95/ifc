const migrationRepository = require('../repositories/MigrationRepository');
const GenericResponse = require('../common/GenericResponse');
const ResponseStatus = require('../common/ResponseStatus');

const init = async () => {
    const rs = await migrationRepository.init();
    if(rs) {
        return new GenericResponse(ResponseStatus.ACKNOWLEDGED, 'database tables created');
    } else {
        return new GenericResponse(ResponseStatus.INTERNAL_ERROR, err);
    };
}

const upgrade = async () => {
    const rs = await migrationRepository.upgrade();
    if(rs) {
        return new GenericResponse(ResponseStatus.ACKNOWLEDGED, null, rs);
    } else {
        return new GenericResponse(ResponseStatus.INTERNAL_ERROR, e);
    }
}

module.exports = {
    init,
    upgrade
}