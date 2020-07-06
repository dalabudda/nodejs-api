const express = require('express');
const users = require('./users.js');
const reports = require('./reports.js');
const router = express.Router();

router.use('/users', users);
router.use('/reports', reports);

module.exports = router;