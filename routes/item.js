'use strict';

const express = require('express');
const controller = require('../controllers/item');
const router = express.Router();

router.route('/')
  .get(controller.getItems);

router.route('/:id')
  .get(controller.getItem);

router.route('/create')
  .post(controller.postCreate);

module.exports = router;
