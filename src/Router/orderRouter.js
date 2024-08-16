const express = require('express');
const { createNewOrder } = require('../Controller/orderController');
const { isLoggedIn } = require('../Validations/authValidation');

const orderRoute = express.Router();

orderRoute.post('/',isLoggedIn, createNewOrder);

module.exports = orderRoute;