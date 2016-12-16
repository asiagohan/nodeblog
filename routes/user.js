'use strict';

const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.route('/')
  .get((req, res) => {
      User
        .fetchAll()
        .then(function(users) {
          res.json({ users });
        });
  });
module.exports = router;
