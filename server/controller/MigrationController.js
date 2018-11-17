const express = require('express');
const router = express.Router();
const migrateService = require('../services/MigrationService');

router.get('/init', (req, res) => {
    migrateService.init().then(rs => {
        res.json(rs);
    }).catch(err => {
        res.error(err);
    });
});

router.get('/upgrade', (req, res) => {
    migrateService.upgrade().then(rs => {
        res.json(rs);
    }).catch(err => {
        res.error(err);
    });
});

module.exports = router;