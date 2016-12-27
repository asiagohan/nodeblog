'use strict';

const Promise = require('bluebird');
const __      = require('underscore');
const bcrypt  = require('bcrypt');

const User           = require('../models/user');
const UserCollection = require('../collections/user');
const config         = require('../config')();

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
  // validation
  req.checkBody('email', 'Enter a valid email').notEmpty().isEmail();
  req.checkBody('name', 'Enter your name').notEmpty().isLength({min: 1, max: 20});
  req.checkBody('password', 'Enter your password').notEmpty().isLength({min: 1, max: 20});

  req.getValidationResult().then(function (result){
    if (!result.isEmpty()) {
      res.status(500).json({msg: 'Validation Error:' + __.map(result.array(), function(error){ return error.param + ':' + error.msg; }).join(',')});
      return;
    }

    // encrypt password
    bcrypt.hash(req.body.password, config.config.saltRound).then(function(hash) {
      new User({
        email: req.body.email,
        name:  req.body.name,
        password: hash
      })
      .save()
      .then(function (user){
        res.json(user.id);
      })
      .catch (function(error){
        res.status(500).json({msg: error.message});
      });
    });
  });
};

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  postCreate: postCreate,
};
