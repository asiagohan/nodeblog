'use strict';

const Bookshelf = require('../db/bookshelf');
const Promise   = require('bluebird');
const crypto    = require('crypto');

const User = Bookshelf.Model.extend({
  tableName: 'users'

}, {
  create: function (){
  }
});

module.exports = User;
