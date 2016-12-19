'use strict';

const bookshelf  = require('bookshelf');
const Promise    = require('bluebird');
const knexconfig = require('../knexfile');
const config     = require('../config/config')();
const knex       = require('knex')(knexconfig[config.env]);

// node blog Bookshelf -> nbBookshelf
const nbBookshelf = bookshelf(knex);


module.exports = nbBookshelf;
