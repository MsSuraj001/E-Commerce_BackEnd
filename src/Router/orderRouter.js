const express = require('express');
const { createNewOrder, getAllOrderDetailsByUserId } = require('../Controller/orderController');
const { isLoggedIn } = require('../Validations/authValidation');

const orderRoute = express.Router();

orderRoute.post('/',isLoggedIn, createNewOrder);
orderRoute.get('/', isLoggedIn, getAllOrderDetailsByUserId);

module.exports = orderRoute;