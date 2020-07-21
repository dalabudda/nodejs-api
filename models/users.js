let users = {};

const mongodb = require('mongodb');
const model = require('./index.js');

const COLLECTION_NAME = "users";

const userProto = {
    _id: "",
    personalData:	{	
        firstName:	"",
        secondName:	"",
        lastName:	"",
        pesel:	"",
        gender:	"",
        dateOfBirth: ""
    },
    address:	{	
        street:	"",
        propertyNumber:	"",
        apartmentNumber: "",
        city: "",
        zipCode: "",
        country: ""
    },
    contacts:	{	
        email:	"",
        privatePhone: "",
        businessPhone: "",
        apps:	{
            skype: "",
            discord: ""
        }
    },
    job:	{	
        position: "",
        workplace: "",	
        dateOfEmployment: "",
        dateOfTermination:	"",
        supervisor: "",
    },
    role: "",
    dateOfCreation:	"",	
    dateOfLastLogin: "",
    badLoginCount: 0,
    logs:	[	
        {	
            date: "",
            message: ""
        }
    ]	
};

users.init = (callback) => {
    model.init(COLLECTION_NAME, callback);
};

users.createOne = (user, callback) => {
    if (user._id != undefined)
        delete user._id;
    user.password = "empty";
    model.createOne(COLLECTION_NAME, user, callback)
};

users.readOne = (id, callback) => {
    const query = { _id: new mongodb.ObjectID(id) };
    model.read(COLLECTION_NAME, query, callback)
};

users.readFiltered = (query, callback) => {
    model.read(COLLECTION_NAME, query, callback)
};

users.readAll = (callback) => {
    model.read(COLLECTION_NAME, {}, callback)
};

users.updateOne = (id, user, callback) => {
    if (user._id != undefined)
        delete user._id;
    const query = { _id: new mongodb.ObjectID(id) };
    model.updateOne(COLLECTION_NAME, query, user, callback);
};

users.deleteOne = (id, callback) => {
    const query = { _id: new mongodb.ObjectID(id) };
    model.deleteOne(COLLECTION_NAME, query, callback);
};

users.deleteAll = (callback) => {
    model.deleteMany(COLLECTION_NAME, {}, callback);
};

module.exports = users;