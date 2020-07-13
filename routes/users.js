const express = require('express');
const users = require('../models/users.js');
const router = express.Router();

router.get('/init', (req, res) => {
    users.init((result) => {
        res.send("Done");
    });
});

router.get('/deleteAll', (req, res) => {
    users.deleteAll((result) => {
        res.send("Deleted all users");
    });
});

router.post('/', (req, res) => {
    const user = req.body;
    users.createOne(user, (result) => {
        const object = { _id: result.insertedId };
        res.json(object);
    });
});

router.get('/:userId', (req, res) => {
    users.readOne(req.params.userId, (result) => {
        res.json(result[0]);
    });
});

router.get('/', (req, res) => {
    users.readAll((result) => {
        res.json(result);
    });
});

router.put('/:userId', (req, res) => {
    const user = req.body;
    users.updateOne(req.params.userId, user, (result) => {
        const object = { _id: req.params.userId };
        res.json(object);
    });
});

router.delete('/:userId', (req, res) => {
    users.deleteOne(req.params.userId, (result) => {
        const object = { _id: req.params.userId };
        res.json(object);
    });
});

module.exports = router;