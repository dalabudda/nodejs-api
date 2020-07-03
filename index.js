const express = require('express');
//const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const router = require('./routes');

express()
    .use(cors())
    .use('/', express.static(__dirname + '/public_html'))
    .use('/api', router)
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));
