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

// public
const public_user = require('./routes/public/user');
app.use('/users', public_user); 

// api
const api_user = require('./routes/api/user');
app.use('/api/users', api_user);

const api_blog = require('./routes/api/blog');
app.use('/api/blogs', api_blog);

const api_item = require('./routes/api/item');
app.use('/api/items', api_item);

const api_comment = require('./routes/api/comment');
app.use('/api/comments', api_comment);

// config
const config = require('./config')();

app.set('view engine', 'jade');

module.exports = app;
if (!module.parent) {
  app.listen(config.port, function () {
    console.log('started');
  })
}
