'use strict';

const Bookshelf = require('./bookshelf');
const Promise   = require('bluebird');
const crypto    = require('crypto');

const User = Bookshelf.Model.extend({
  tableName: 'users'
});

module.exports = User;
