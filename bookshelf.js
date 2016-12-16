const env = 'development';
const config = require('./knexfile');
const knex = require('knex')(config[env]);

const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;
