const express = require('express');
const report = require('./controllers/report.js');
const router = express.Router();

router.get('/report', report.get);
router.post('/report', report.post);

module.exports = router;