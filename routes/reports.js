const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //select report from database, prepare JSON and send
    res.send('This is reports GET');
});

router.post('/', (req, res) => {
    res.send('This is reports POST');
});

module.exports = router;