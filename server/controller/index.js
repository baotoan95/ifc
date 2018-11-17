module.exports = (app) => {
    app.use('/', require('./HomeController'));
    app.use('/uaa', require('./UAA'));
    app.use('/users', require('./UserController'));
    app.use('/migrate', require('./MigrationController'));
    app.use('/wishes', require('./WishController'));
}