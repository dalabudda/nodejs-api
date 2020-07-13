let model = {};

const MongoClient = require('mongodb').MongoClient;
const DB_URL = process.env.MONGODB_URI;
const DBNAME = process.env.MONGODB_DBNAME;
let database;
let databaseObject;
let numberOfConnections = 0;

const connect = (callback) => {
    numberOfConnections++;
    if (numberOfConnections > 1) {
        callback();
    }
    else {
        MongoClient.connect(DB_URL, (err, db) => {
            if (err) throw err;
            console.log("Connected to database");
            database = db;
            databaseObject = database.db(DBNAME);
            callback();
        });
    }
};

const disconnect = () => {
    numberOfConnections--;
    if (numberOfConnections == 0) {
        database.close();
        console.log("Disconnected from database");
    }
};

model.init = (collection_name, callback) => {
    connect(() => {
        databaseObject.createCollection(collection_name, (err, result) => {
            if (err) throw err;
            console.log("Collection created!");
            disconnect();
            callback(result);
        });
    });
};

model.createOne = (collection_name, object, callback) => {
    connect(() => {
        databaseObject.collection(collection_name).insertOne(object, (err, result) => {
            if (err) throw err;
            console.log("1 inserted");
            disconnect();
            callback(result);
        });
    });
};

model.read = (collection_name, query = {}, callback) => {
    connect(() => {
        databaseObject.collection(collection_name).find(query).toArray((err, result) => {
            if (err) throw err;
            console.log("1 selected");
            disconnect();
            callback(result);
        });
    });
};

model.updateOne = (collection_name, query, object, callback) => {
    connect(() => {
        const newObject = { $set: object};
        databaseObject.collection(collection_name).updateOne(query, newObject, (err, result) => {
            if (err) throw err;
            console.log("1 updated");
            disconnect();
            callback(result);
        });
    });
};

model.deleteOne = (collection_name, query, callback) => {
    connect(() => {
        databaseObject.collection(collection_name).deleteOne(query, (err, result) => {
            if (err) throw err;
            console.log("1 deleted");
            disconnect();
            callback(result);
        });
    });
};

module.exports = model;