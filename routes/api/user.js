'use strict';

const express = require('express');
const controller = require('../../controllers/api/user');
const router = express.Router();

router.route('/')
  .get(controller.getUsers);

router.route('/:id')
  .get(controller.getUser);

router.route('/create')
  .post(controller.postCreate);

module.exports = router;
