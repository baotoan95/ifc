const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStratery = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const appConfig = require('../initilizations/AppConfig').configs;
const express = require('express');
const router = express.Router();
const userService = require('../services/UserService');
const ResponseStatus = require('../common/ResponseStatus');
const GenericResponse = require('../common/GenericResponse');
const jwt = require('jsonwebtoken');

require('../config/local-passport');
require('../config/facebook-passport');

/** JWT stratery */
passport.use(new JWTStratery({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'ifc-secret'
}, async (jwtPayload, cb) => {
    try {
        const user = await userService.findById(jwtPayload.id);
        if(user) {
            return cb(null, user.dataValues);
        }
    } catch(err) {
        return cb(err);
    };
}));
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (obj, done) {
    done(null, obj);
});


/*================= auth routes ==================*/


/** local */
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if(err || !user) {
            return res.status(400).json(new GenericResponse(
                ResponseStatus.NOT_FOUND,
                info.message
            ));
        }
        req.login(user, {session: false}, (err) => {
            if(err) {
                res.send(err);
            }
            user.password = 'Hidden';
            const token = jwt.sign(user.toJSON(), 'ifc-secret', {
                expiresIn: '1m'
            });
            return res.json({
                message: info.message,
                user,
                token
            });
        })
    })(req, res);
})

/** facebook */
router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: appConfig.authentication.loginRedirect
}), (req, res) => {
    res.redirect(appConfig.authentication.loginRedirect 
        + '?type=facebook&userId=' + req.user.id
        + '&c=' + req.user.login_token);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/access_token', (req, res) => {
    const token = req.headers.token;
    const userId = req.headers.user_id;
    if(token && userId) {
        userService.findByLoginToken(userId, token).then(user => {
            const token = jwt.sign(user.toJSON(), 'ifc-secret', {
                expiresIn: '1m'
            });
            user.passport = "Hidden";
            return res.json({
                user,
                token
            });
        }).catch(err => {
            console.log('access_token', err);
            res.status(401).send();
            return;
        });
    } else {
        res.status(401).send();
    }
});

router.post('/sign-up', (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        name: req.body.name
    }
    userService.addUser(user).then(rs => {
        res.status(rs.statusCode).send(rs);
    });
})

module.exports = router;