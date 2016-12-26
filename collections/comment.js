const __ = require('underscore');
const Bookshelf = require('../db/bookshelf');
const Comment = require('../models/comment');
const Promise = require('bluebird');

const CommentCollection = Bookshelf.Collection.extend({
  model: Comment,
}, {
  getList: function(item_id){
    return new this()
      .query('where', 'item_id', '=', item_id)
      .fetch()
      .then (function (collection){
        return collection.toJSON();
      })
      .catch (function (error){
        throw error ;
      });
  }
});

module.exports = CommentCollection;
