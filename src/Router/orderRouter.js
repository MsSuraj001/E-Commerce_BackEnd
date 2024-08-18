const express = require('express');
const { createNewOrder, getAllOrderDetailsByUserId, getOrderByOrderId, cancleOrder, changeOrderStatus } = require('../Controller/orderController');
const { isLoggedIn, isAdmin } = require('../Validations/authValidation');

const orderRoute = express.Router();

orderRoute.post('/',isLoggedIn, createNewOrder);
orderRoute.get('/', isLoggedIn, getAllOrderDetailsByUserId);
orderRoute.get('/:id', isLoggedIn, getOrderByOrderId);
orderRoute.put('/:id/cancle',isLoggedIn, cancleOrder);
orderRoute.put('/:id/status',isLoggedIn, isAdmin, changeOrderStatus);

module.exports = orderRoute;