const __ = require('underscore');
const Bookshelf = require('../db/bookshelf');
const User = require('../models/user');
const Promise = require('bluebird');

const UserCollection = Bookshelf.Collection.extend({
  model: User,
}, {
  getList: function(){
    return new this()
      .fetch()
      .then (function (collection){
        return collection.map (function(c){
          return {id: c.attributes.id, name: c.attributes.name};
        });
      })
      .catch (function (error){
        throw error ;
      });
  }
});

module.exports = UserCollection;
