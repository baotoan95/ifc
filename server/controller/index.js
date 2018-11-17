module.exports = (app) => {
    app.use('/', require('./HomeController'));
    app.use('/uaa', require('./UUA'));
    app.use('/users', require('./UserController'));
    app.use('/migrate', require('./MigrationController'));
}