let account = {};

const model = require('./index.js');
const users = require('./users.js');

account.get = (userId, callback) => {
    users.readOne(userId, callback);
};

account.login = (login, pass, callback) => {
    const query = { _id: login };
    model.read("users", query, (result) => {
        if (result[0]) {
            if (result[0].password == pass) {

            }
        }
    });
};

module.exports = account;