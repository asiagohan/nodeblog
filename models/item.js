'use strict';

const Bookshelf = require('../bookshelf');
const Promise   = require('bluebird');
const crypto    = require('crypto');

const Item = Bookshelf.Model.extend({
  tableName: 'items'

}, {
  create: function (){
  }
});

module.exports = Item;
