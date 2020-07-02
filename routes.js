const express = require('express');
const users = require('./controllers/users.js');
const reports = require('./controllers/reports.js');
const router = express.Router();

router.get('/users/init', users.init);
router.get('/users/add', users.put);
router.get('/users', users.get);
router.get('/reports', reports.get);
router.post('/reports', reports.post);

module.exports = router;