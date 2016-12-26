'use strict';

const Comment = require('../models/comment');
const CommentCollection = require('../collections/comment');
const Promise = require('bluebird');
const moment = require('moment');

const getComment = function(req, res){
  const id = req.params.id;
  Comment.forge({id: id})
    .fetch({columns: ['id', 'name', 'text', 'created_at', 'updated_at']})
    .then(function (comment){
      res.json(comment.toJSON());
    })
    .catch(function (error) {
       res.status(500).json({msg: error.message});
    });
};

const getComments = function(req, res) {
  CommentCollection.getList(req.query.item_id)
    .then(function (comments){
      res.json(comments);
    })
    .catch (function (error) {
      res.status(500).json({msg: error.message});
    });
};

const postCreate = function(req, res) {
  const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
  new Comment({
    name: req.body.name,
    text: req.body.text,
    item_id: req.body.item_id,
    created_at: timestamp,
    updated_at: timestamp
  })
  .save()
  .then(function (comment){
    res.json(comment.id);
  })
  .catch (function(error){
    res.status(500).json({msg: error.message});
  });
};

module.exports = {
  getComment: getComment,
  getComments: getComments,
  postCreate: postCreate,
};
