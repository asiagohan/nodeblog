const config     = require('../config')()
const knexconfig = require('../config/knexfile');
const knex       = require('knex')(knexconfig[config.env]);

const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
