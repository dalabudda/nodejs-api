let account = {};
const mongodb = require('mongodb');

const users = require('./users.js');

account.get = (userId, callback) => {
    users.readOne(userId, callback);
};

account.login = (login, pass, callback) => {
    const property = "pesel";
    const query = { _id: new mongodb.ObjectID(login) };
    //let query = {};
    //query[property] = login;
    users.readFiltered(query, (result) => {
        if (result[0]) {
            if (result[0].password == pass) {
                callback({ status: "success", id: result[0]._id });
            }
            else {
                callback({ status: "error", message: "wrong password" });
            }
        }
        else {
            callback({ status: "error", message: "account not found" });
        }
    });
};

module.exports = account;