let users = {};

const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGODB_URI;
const dbname = "heroku_hlcqgxf6";
const tablename = "users";

users.init = (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        const dbo = db.db(dbname);
        dbo.createCollection(tablename, (err, result) => {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
        });
    });
    res.send("Done");
};

users.get = (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        const dbo = db.db(dbname);
        dbo.collection(tablename).find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            res.json(result);
        });
    });
};

users.put = (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        const dbo = db.db(dbname);
        const myobj = {
            id: 1,
            employeeNumber: 123317,
            firstName: "Tomasz",
            secondName: "Krzysztof",
            lastName: "Kowalski",
            gender: "mężczyzna",
            dateOfBirth: "1980-02-23T00:00:00.000Z",
            street: "Pomorska",
            propertyNumber: "12",
            apartmentNumber: "7",
            city: "Gdańsk",
            zipCode: "80-000",
            country: "Polska",
            email: "tomasz.kowalski@dealer.toyota.pl",
            privetPhone: 600300233,
            businessPhone: 789000100,
            jobPosition: "doradca sprzedaży flotowej",
            workplace: "oddział Gdańsk, pomorska",
            supervisor: true,
            education: "średnie",
            dateOfEmployment: "2010-01-01T00:00:00.000Z",
            dateOfTermination: "",
            employmentStatus: true
        };
        dbo.collection(tablename).insertOne(myobj, function(err, result) {
            if (err) throw err;
            console.log("1 user inserted");
            db.close();
        });
    });
    res.send("Done");
};

users.delete = (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        const dbo = db.db(dbname);
        const myquery = { _id: 'Mountain 21' };
        dbo.collection(tablename).deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            console.log("1 user deleted");
            db.close();
        });
    });
};

module.exports = users;