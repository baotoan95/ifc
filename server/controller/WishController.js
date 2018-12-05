const express = require('express');
const router = express.Router();
const wishService = require('../services/WishService');
const passport = require('passport');

router.use(passport.authenticate('jwt', {session: false}));

router.post('/', (req, res) => {
    const wish = {
        message: req.body.message,
        background_sound: req.body.background_sound
    }
    wishService.addWish(wish).then(rs => {
        res.send(rs);
    }).catch(err => {
        console.log(err);
        res.send(err);
    })
})

router.put('/', (req, res) => {
    const wish = {
        message: req.body.message,
        background_sound: req.body.background_sound
    }
    wishService.updateWish(wish).then(rs => {
        res.send(rs);
    }).catch(err => {
        res.error(err);
    })
})

router.get('/', (req, res) => {
    if(req.query.w) {
        wishService.getWish(req.query.w).then(rs => {
            res.send(rs);
        }).catch(err => {
            res.error(err);
        })
    }
})

module.exports = router;