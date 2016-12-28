'use strict';

const express = require('express');
const controller = require('../../controllers/public/blog');
const router = express.Router();

router.route('/')
  .get(controller.getBlogs);

module.exports = router;
