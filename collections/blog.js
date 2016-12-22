const __ = require('underscore');
const Bookshelf = require('../db/bookshelf');
const Blog = require('../models/blog');
const Promise = require('bluebird');

const BlogCollection = Bookshelf.Collection.extend({
  model: Blog,
}, {
  getList: function(){
    return new this()
      .fetch()
      .then (function (collection){
        return collection.toJSON();
      })
      .catch (function (error){
        throw error ;
      });
  }
});

module.exports = BlogCollection;
