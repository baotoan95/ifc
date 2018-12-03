const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const appConfig = require('../initilizations/AppConfig').configs;

passport.use(new FacebookStrategy({
    clientID: appConfig.social.facebook.clientId,
    clientSecret: appConfig.social.facebook.clientSecret,
    callbackURL: appConfig.social.facebook.callback,
    profileFields: ['id', 'displayName', 'photos', 'email'],
    passReqToCallback : true
}, function (req, accessToken, refreshToken, profile, done) {
    userService.addUserWithFacebook(profile).then(userProfile => {
        done(null, userProfile);
    }).catch(err => {
        return done(null);
    })
}));