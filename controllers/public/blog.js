'use strict';

const Promise = require('bluebird');
const __      = require('underscore');
const bcrypt  = require('bcrypt');

const getBlogs = function(req, res) {
  res.render('blog');
};

module.exports = {
  getBlogs: getBlogs,
};
