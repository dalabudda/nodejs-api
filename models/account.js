let account = {};
const mongodb = require('mongodb');

const users = require('./users.js');

account.get = (userId, callback) => {
    users.readOne(userId, callback);
};

account.login = (login, pass, callback) => {
    const property = "pesel";
    let query;
    if (/[0-9A-Fa-f]{24}/g.test(login)) {
        query = { _id: new mongodb.ObjectID(login) };
    }
    else {
        callback(400, { error: "login should be _id" });
        return;
    }
        
    //let query = {};
    //query[property] = login;
    users.readFiltered(query, (result) => {
        if (result[0]) {
            if (result[0].password == pass) {
                callback(200, { _id: result[0]._id });
            }
            else {
                callback(400, { error: "wrong password" });
            }
        }
        else {
            callback(404, { error: "account not found" });
        }
    });
};

account.register = (user, callback) => {
    users.createOne(user, callback);
};

account.resetPassword = (userId, callback) => {
    const newPassword = { password: "reset" };
    users.updateOne(userId, newPassword, callback);
};

module.exports = account;