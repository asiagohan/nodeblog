'use strict';

const express = require('express');
const app = express();

// modules

// routing
const index = require('./routes/index');
app.use('/', index);

const user = require('./routes/user');
app.use('/users', user);

// config


app.listen(8000, function () {
  console.log('started');
})
