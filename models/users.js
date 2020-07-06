let users = {};

const mongodb = require('mongodb');
let model = require('./index.js');

const COLLECTION_NAME = "users";

users.init = (req, res) => {
    model.init(COLLECTION_NAME, (result) => {
        res.send("Done");
    })
};

users.create = (req, res) => {
    const user = req.body;
    model.create(COLLECTION_NAME, user, (result) => {
        res.send("Done");
    });
};

users.read = (req, res) => {
    model.read(COLLECTION_NAME, {}, (result) => {
        res.json(result);
    })
};

users.update = (req, res) => {
    const query = { _id: new mongodb.ObjectID(req.params.userId) };
    const user = req.body;
    model.update(COLLECTION_NAME, query, user, (result) => {
        res.send("Done");
    });
};

users.delete = (req, res) => {
    const query = { _id: new mongodb.ObjectID(req.params.userId) };
    model.delete(COLLECTION_NAME, query, (result) => {
        res.send("Done");
    });
};

module.exports = users;