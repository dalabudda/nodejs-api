let users = {};

let MongoClient = require('mongodb').MongoClient;
let url = process.env.MONGODB_URI;

users.init = (req, res) => {
    MongoClient.connect(url, (err, db) => {
        if (err) throw err;
        db.collection('users', function (err, collection) {
        
            collection.insert({
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
              });
    
            db.collection('users').count(function (err, count) {
                if (err) throw err;
                
                console.log('Total Rows: ' + count);
            });
        });
    });
};

users.put = (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        
      });
};

users.get = (req, res) => {
    res.send('This is POST');
};

module.exports = users;