'use strict';

const Item = require('../models/item');
const ItemCollection = require('../collections/item');
const Promise = require('bluebird');
const moment = require('moment');

const getItem = function(req, res){
  const id = req.params.id;
  Item.forge({id: id})
    .fetch({columns: ['id', 'title', 'created_at', 'updated_at']})
    .then(function (item){
      res.json(item.toJSON());
    })
    .catch(function (error) {
       res.status(500).json({msg: error.message});
    });
};

const getItems = function(req, res) {
  ItemCollection.getList(req.body.blog_id)
    .then(function (items){
      res.json(items);
    })
    .catch (function (error) {
      res.status(500).json({msg: error.message});
    });
};

const postCreate = function(req, res) {
  const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  new Item({
    title: req.body.title,
    text: req.body.text,
    blog_id: req.body.blog_id,
    created_at: timestamp,
    updated_at: timestamp
  })
  .save()
  .then(function (item){
    res.json(item.id);
  })
  .catch (function(error){
    res.status(500).json({msg: error.message});
  });
};

module.exports = {
  getItem: getItem,
  getItems: getItems,
  postCreate: postCreate,
};
