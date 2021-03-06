const express = require('express');
const users = require('./users.js');
const workplace = require('./workplace.js');
const account = require('./account.js');
const reports = require('./reports.js');
const router = express.Router();

router.use('/users', users);
router.use('/workplace', workplace);
router.use('/account', account);
router.use('/reports', reports);

module.exports = router;