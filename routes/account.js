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
        res.status(401).send({ error: "Not logged in" });
    }
});

router.post('/login', (req, res) => {
    const login = req.body.login;
    if (!login) {
        res.status(400).send({ error: "Login needed" });
        return;
    }
        
    const pass = req.body.password;
    if (!pass) {
        res.status(400).send({ error: "Password needed" });
        return;
    }

    account.login(login, pass, (status, result) => {
        if (status == 200) {
            req.session.account = { userId: result };
        }
        res.status(status).json(result);
    });
});

router.get('/logout', (req, res) => {
    req.session.account = {};
    res.send("Logged out");
});

router.post('/register', (req, res) => {
    const user = req.body;
    account.register(user, (result) => {
        const object = { _id: result.insertedId };
        res.json(object);
    })
});

router.get('/resetPassword', (req, res) => {
    const sess = req.session.account;
    if (sess && sess.userId) {
        account.resetPassword(sess.userId, (result) => {
            res.json(sess.userId);
        });
    }
    else {
        res.status(401).send({ error: "Not logged in" });
    }
});

module.exports = router;