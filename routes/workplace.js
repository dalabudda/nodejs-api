const express = require('express');
const workplace = require('../models/workplace.js');
const router = express.Router();

router.get('/init', (req, res) => {
    workplace.init((result) => {
        res.send("Done");
    });
});

router.get('/deleteAll', (req, res) => {
    workplace.deleteAll((result) => {
        res.send("Deleted all workplace");
    });
});

router.get('/', (req, res) => {
    workplace.readAll((result) => {
        res.json(result);
    });
});

router.post('/', (req, res) => {
    const user = req.body;
    workplace.createOne(user, (result) => {
        const object = { _id: result.insertedId };
        res.json(object);
    });
});

router.get('/:workplaceId', (req, res) => {
    workplace.readOne(req.params.workplaceId, (result) => {
        res.json(result[0]);
    });
});

router.put('/:workplaceId', (req, res) => {
    const workplace = req.body;
    workplace.updateOne(req.params.workplaceId, workplace, (result) => {
        const object = { _id: req.params.workplaceId };
        res.json(object);
    });
});

router.delete('/:workplaceId', (req, res) => {
    workplace.deleteOne(req.params.workplaceId, (result) => {
        const object = { _id: req.params.workplaceId };
        res.json(object);
    });
});

module.exports = router;