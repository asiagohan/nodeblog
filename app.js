'use strict';

const express = require('express');
const app = express();

// modules
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator([]));

// routing
const index = require('./routes/index');
app.use('/', index);

const user = require('./routes/user');
app.use('/users', user);

const blog = require('./routes/blog');
app.use('/blogs', blog);

const item = require('./routes/item');
app.use('/items', item);

const comment = require('./routes/comment');
app.use('/comments', comment);
// config
// for reference elsewhere in nodeblog, set global variable
const config = require('./config')();

module.exports = app;
if (!module.parent) {
  app.listen(config.port, function () {
    console.log('started');
  })
}
