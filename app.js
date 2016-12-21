'use strict';

const express = require('express');
const app = express();

// modules
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// routing
const index = require('./routes/index');
app.use('/', index);

const user = require('./routes/user');
app.use('/users', user);


// config
// for reference elsewhere in nodeblog, set global variable
const config = require('./config')();

app.listen(config.port, function () {
  console.log('started');
})
