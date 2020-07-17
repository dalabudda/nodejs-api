const Promise = require('promise');
const MongoClient = require('mongodb').MongoClient;
const DB_URL = process.env.MONGODB_URI;
const DBNAME = process.env.MONGODB_DBNAME;
let databaseObject = null;

MongoClient.connect(DB_URL)
    .then(db => {
        console.log("Connected to database");
        databaseObject = db.db(DBNAME);
    })
    .catch(err => {
        if (err) throw err;
    });

const init = (collection_name, callback) => {
    databaseObject.createCollection(collection_name, (err, result) => {
        if (err) throw err;
        console.log("Collection created!");
        callback(result);
    });
};

const createOne = (collection_name, object, callback) => {
    databaseObject.collection(collection_name).insertOne(object, (err, result) => {
        if (err) throw err;
        console.log("1 inserted");
        callback(result);
    });
};

const read = (collection_name, query = {}, callback) => {
    databaseObject.collection(collection_name).find(query).toArray((err, result) => {
        if (err) throw err;
        console.log("selected");
        callback(result);
    });
};

const updateOne = (collection_name, query, object, callback) => {
    const newObject = { $set: object};
    databaseObject.collection(collection_name).updateOne(query, newObject, (err, result) => {
        if (err) throw err;
        console.log("1 updated");
        callback(result);
    });
};

const deleteOne = (collection_name, query, callback) => {
    databaseObject.collection(collection_name).deleteOne(query, (err, result) => {
        if (err) throw err;
        console.log("1 deleted");
        callback(result);
    });
};

const deleteMany = (collection_name, query, callback) => {
    databaseObject.collection(collection_name).deleteMany(query, (err, result) => {
        if (err) throw err;
        console.log("Many deleted");
        callback(result);
    });
}

module.exports = { databaseObject, init, createOne, read, updateOne, deleteOne, deleteMany };