const FOUND = {message: 'found', code: 200};
const NO_RESULT = {message: 'no result(s)', code: 204};
const ACKNOWLEDGED = {message: 'acknowledged', code: 200};

const BAD_REQUEST = {message: 'bad request', code: 400};
const UNAUTHORISED = {message: 'unauthorised', code: 401};
const FORBIDDEN = {message: 'forbidden', code: 403};
const NOT_FOUND = {message: 'not found', code: 404};
const METHOD_NOT_ALLOWED = {message: 'method not allowed', code: 405};
const NOT_ACCEPTABLE = {message: 'not acceptable', code: 406};

const INTERNAL_ERROR = {message: 'internal error', code: 500};
const BAD_GATEWAY = {message: 'bad gateway', code: 502};

module.exports = {
    FOUND,
    NO_RESULT,
    ACKNOWLEDGED,
    BAD_REQUEST,
    UNAUTHORISED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    NOT_ACCEPTABLE,
    INTERNAL_ERROR,
    BAD_GATEWAY
}