'use strict';

const express = require('express');
const controller = require('../../controllers/public/comment');
const router = express.Router();

router.route('/')
  .get(controller.getComments);

module.exports = router;
