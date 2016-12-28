'use strict';

const Promise = require('bluebird');
const __      = require('underscore');
const bcrypt  = require('bcrypt');

const getComments = function(req, res) {
  res.render('comment');
};

module.exports = {
  getComments: getComments,
};
