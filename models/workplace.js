let workplace = {};

const mongodb = require('mongodb');
const model = require('./index.js');

const COLLECTION_NAME = "workplace";

workplace.init = (callback) => {
    model.init(COLLECTION_NAME, callback);
};

workplace.createOne = (workp, callback) => {
    if (workp._id != undefined)
        delete workp._id;
        workp.password = "empty";
    model.createOne(COLLECTION_NAME, workp, callback)
};

workplace.readOne = (id, callback) => {
    const query = { _id: new mongodb.ObjectID(id) };
    model.read(COLLECTION_NAME, query, callback)
};

workplace.readFiltered = (query, callback) => {
    model.read(COLLECTION_NAME, query, callback)
};

workplace.readAll = (callback) => {
    model.read(COLLECTION_NAME, {}, callback)
};

workplace.updateOne = (id, workp, callback) => {
    if (workp._id != undefined)
        delete workp._id;
    const query = { _id: new mongodb.ObjectID(id) };
    model.updateOne(COLLECTION_NAME, query, workp, callback);
};

workplace.deleteOne = (id, callback) => {
    const query = { _id: new mongodb.ObjectID(id) };
    model.deleteOne(COLLECTION_NAME, query, callback);
};

workplace.deleteAll = (callback) => {
    model.deleteMany(COLLECTION_NAME, {}, callback);
};

module.exports = workplace;