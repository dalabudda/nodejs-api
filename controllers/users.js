let users = {};

let MongoClient = require('mongodb').MongoClient;
let url = process.env.MONGODB_URI;

users.init = (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        db.createCollection("users", (err, res) => {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
        });
    });
};

users.put = (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var myobj = { name: "Company Inc", address: "Highway 37" };
        db.collection("customers").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
};

users.get = (req, res) => {
    res.send('This is POST');
};

module.exports = users;