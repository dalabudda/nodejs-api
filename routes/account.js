const express = require('express');
const account = require('../models/account.js');
const router = express.Router();

router.get('/', (req, res) => {
    const sess = req.session.account;
    if (sess && sess.userId) {
        account.get(sess.userId, (result) => {
            res.json(result);
        });
    }
    else {
        res.send("Not logged in");
    }
});

router.post('/login', (req, res) => {
    const login = req.body.login;
    if (!login)
        res.send("Login needed");
    const pass = req.body.password;
    if (!pass)
        res.send("Password needed");

    account.login(login, pass, (result) => {
        res.json(result);
    });
});

router.get('/logout', (req, res) => {
    req.session.account = {};
    res.send("Logged out");
});

module.exports = router;