function GenericResponse (status, message, data) {
    this.statusCode = status.code;
    this.statusMessage = status.message;
    this.message = message;
    this.data = data;
}

module.exports = GenericResponse;