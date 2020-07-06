const express = require('express');
const users = require('../models/users.js');
const router = express.Router();

router.get('/init', users.init);
router.post('/', users.create);
router.get('/', users.read);
router.put('/update/:userId', users.update);
router.delete('/delete/:userId', users.delete);

module.exports = router;