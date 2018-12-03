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

router.post('/', (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        name: req.body.name
    }
    userService.addUser(user).then(rs => {
        res.statusCode = rs.statusCode;
        res.send(rs);
    });
})

module.exports = router;