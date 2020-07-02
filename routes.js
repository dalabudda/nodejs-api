const express = require('express');
const users = require('./controllers/users.js');
const reports = require('./controllers/reports.js');
const router = express.Router();

router.get('/users/init', user.init);
router.get('/users/add', user.put);
router.get('/users', user.get);
router.get('/reports', report.get);
router.post('/reports', report.post);

module.exports = router;