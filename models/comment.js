'use strict';

const Bookshelf = require('../db/bookshelf');
const Promise   = require('bluebird');
const crypto    = require('crypto');

const Comment = Bookshelf.Model.extend({
  tableName: 'comments'

}, {
  create: function (){
  }
});

module.exports = Comment;
