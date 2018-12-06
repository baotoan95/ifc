const express = require('express');
const router = express.Router();
const userService = require('../services/UserService');
const passport = require('passport');

router.use(passport.authenticate('jwt', {session: false}));

router.get('/', (req, res) => {
    userService.findAll().then(rs => {
        res.send(rs);
    }).catch(err => {
        res.error(err);
    })
})

module.exports = router;