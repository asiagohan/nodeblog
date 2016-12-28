'use strict';

const express = require('express');
const controller = require('../../controllers/public/item');
const router = express.Router();

router.route('/')
  .get(controller.getItems);

module.exports = router;
