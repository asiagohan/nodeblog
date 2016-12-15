'use strict';

const express = require('express');
const app = express();

// routing
const index = require('./routes/index')
app.use('/', index);

app.listen(8000, function () {
  console.log('started');
})
