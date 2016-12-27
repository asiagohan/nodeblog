const __ = require('underscore');
const Bookshelf = require('../bookshelf');
const Item = require('../models/item');
const Promise = require('bluebird');

const ItemCollection = Bookshelf.Collection.extend({
  model: Item,
}, {
  getList: function(blog_id){
    return new this()
      .query('where', 'blog_id', '=', blog_id)
      .fetch()
      .then (function (collection){
        return collection.toJSON();
      })
      .catch (function (error){
        throw error ;
      });
  }
});

module.exports = ItemCollection;
