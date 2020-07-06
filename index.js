const express = require('express');
const session = require('express-session')
//const path = require('path');
const cors = require('cors');
const router = require('./routes/index.js');
const PORT = process.env.PORT || 5000;

express()
    .use(cors())
    .use(express.json())
    .use(session({
        secret: 'ssshhhhh', 
        saveUninitialized: false, 
        resave: false, 
        cookie: { secure: false }
    }))
    .use('/', express.static(__dirname + '/public_html'))
    .use('/api', router)
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));
