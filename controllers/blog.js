'use strict';

const Blog = require('../models/blog');
const BlogCollection = require('../collections/blog');
const Promise = require('bluebird');

const getBlog = function(req, res){
  const id = req.params.id;
  Blog.forge({id: id})
    .fetch({columns: ['id', 'title']})
    .then(function (blog){
      res.json(blog.toJSON());
    })
    .catch(function (error) {
       res.status(500).json({msg: error.message});
    });
};

const getBlogs = function(req, res) {
  BlogCollection.getList()
    .then(function (blogs){
      res.json(blogs);
    })
    .catch (function (error) {
      res.status(500).json({msg: error.message});
    });
};

const postCreate = function(req, res) {
  new Blog({
    title: req.body.title,
    user_id: req.body.user_id,
  })
  .save()
  .then(function (blog){
    res.json(blog.id);
  })
  .catch (function(error){
    res.status(500).json({msg: error.message});
  });
};

module.exports = {
  getBlog: getBlog,
  getBlogs: getBlogs,
  postCreate: postCreate,
};
