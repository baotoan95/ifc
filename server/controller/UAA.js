const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const appConfig = require('../initilizations/AppConfig').configs;
const express = require('express');
const router = express.Router();


passport.serializeUser(function (user, done) {
    // TODO: save to DB
    // console.log('serialize', user);
    done(null, user);
});
passport.deserializeUser(function (obj, done) {
    // console.log('deserialize', obj);
    done(null, obj);
});
passport.use(new FacebookStrategy({
    clientID: appConfig.social.facebook.clientId,
    clientSecret: appConfig.social.facebook.clientSecret,
    callbackURL: appConfig.social.facebook.callback
}, function (accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
        return done(null, profile);
    });
}));

/*================= auth routes ==================*/
router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/login'
}), (req, res) => {
    console.log(req);
    res.redirect(appConfig.authentication.loginSuccessRedirect + '?type=facebook&userId=' + req.user.id);
});

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/account', ensureAuthenticated, function (req, res) {
    res.json({ user: req.user });
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
}

module.exports = router;