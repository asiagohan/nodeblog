'use strict';

const express = require('express');
const controller = require('../../controllers/public/user');
const router = express.Router();

router.route('/')
  .get(controller.getUsers);

module.exports = router;
