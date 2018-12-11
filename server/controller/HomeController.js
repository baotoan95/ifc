const express = require('express');
const router = express.Router();
const appConfig = require('../initilizations/AppConfig').configs;

router.get('/', (req, res) => {
    res.redirect(appConfig.ui.url);
})

module.exports = router;