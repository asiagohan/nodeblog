'use strict';

const express = require('express');
const controller = require('../../controllers/api/comment');
const router = express.Router();

router.route('/')
  .get(controller.getComments);

router.route('/:id')
  .get(controller.getComment);

router.route('/create')
  .post(controller.postCreate);

module.exports = router;
