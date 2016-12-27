'use strict';

const express = require('express');
const controller = require('../../controllers/api/blog');
const router = express.Router();

router.route('/')
  .get(controller.getBlogs);

router.route('/:id')
  .get(controller.getBlog);

router.route('/create')
  .post(controller.postCreate);

module.exports = router;
