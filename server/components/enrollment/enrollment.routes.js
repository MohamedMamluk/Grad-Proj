const express = require('express');
const authorization = require('../../middleware/authorization');
const router = express.Router();
const {
  confirmAddition,
  createPaymentIntent,
} = require('./enrollment.controller');
//this will handle creating a payment intent
router.get('/intent/:courseID', authorization, createPaymentIntent);
//this will handle all the remaining operation "maybe"
router.post('/confirm', authorization, confirmAddition);

module.exports = router;
