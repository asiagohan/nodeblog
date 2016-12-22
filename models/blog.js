'use strict';

const Bookshelf = require('../db/bookshelf');
const Promise   = require('bluebird');
const crypto    = require('crypto');

const Blog = Bookshelf.Model.extend({
  tableName: 'blogs'

}, {
  create: function (){
  }
});

module.exports = Blog;
