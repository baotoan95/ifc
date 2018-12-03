const passport = require('passport');
const LocalStrategy = require('passport-local');
const userService = require('../services/UserService');
const bcrypt = require('bcrypt');

/** Local strategy */
passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, (username, password, cb) => {
    userService.findByUsername(username).then(user => {
        if(user && bcrypt.compare(password, user.password)) {
            return cb(null, user, {message: 'Logged in successfully'});
        } else {
            return cb(null, false, {message: 'Incorrect username or password'});
        }
    }).catch(err => {
        return cb(err);
    })
}));