'use strict';

const Promise = require('bluebird');
const __      = require('underscore');
const bcrypt  = require('bcrypt');

const getUsers = function(req, res) {
  res.render('user');
};

module.exports = {
  getUsers: getUsers,
};
