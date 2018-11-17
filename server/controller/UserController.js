const express = require('express');
const router = express.Router();
const userService = require('../services/UserService');

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
        password: req.body.password
    }
    userService.addUser(user).then(rs => {
        res.send(rs);
    }).catch(err => {
        res.error(err);
    })
})

module.exports = router;