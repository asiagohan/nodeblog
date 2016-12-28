'use strict';

const Promise = require('bluebird');
const __      = require('underscore');
const bcrypt  = require('bcrypt');

const getItems = function(req, res) {
  res.render('item');
};

module.exports = {
  getItems: getItems,
};
