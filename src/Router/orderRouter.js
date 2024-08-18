const express = require('express');
const { createNewOrder, getAllOrderDetailsByUserId, getOrderByOrderId } = require('../Controller/orderController');
const { isLoggedIn } = require('../Validations/authValidation');

const orderRoute = express.Router();

orderRoute.post('/',isLoggedIn, createNewOrder);
orderRoute.get('/', isLoggedIn, getAllOrderDetailsByUserId);
orderRoute.get('/:id', isLoggedIn, getOrderByOrderId);

module.exports = orderRoute;