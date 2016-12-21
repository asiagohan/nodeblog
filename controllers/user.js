'use strict';

const User = require('../models/user');
const UserCollection = require('../collections/user');
const Promise = require('bluebird');

const getUser = function(req, res){
  const id = req.params.id;
  User.forge({id: id})
    .fetch({columns: ['id', 'name']})
    .then(function (user){
      res.json(user.toJSON());
    })
    .catch(function (error) {
       res.status(500).json({msg: error.message});
    });
};

const getUsers = function(req, res) {
  UserCollection.getList()
    .then(function (users){
      res.json(users);
    })
    .catch (function (error) {
      res.status(500).json({msg: error.message});
    });
};

const postCreate = function(req, res) {
  console.log(req.body);
  new User({
    email: req.body.email,
    name:  req.body.name,
    password: req.body.password
  })
  .save()
  .then(function (user){
    res.json(user.id);
  })
  .catch (function(error){
    res.status(500).json({msg: error.message});
  });
};

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  postCreate: postCreate,
};
