const __ = require('underscore');
const Bookshelf = require('../db/bookshelf');
const Item = require('../models/item');
const Promise = require('bluebird');

const ItemCollection = Bookshelf.Collection.extend({
  model: Item,
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

module.exports = ItemCollection;
