const express = require('express');
const { getTheCart, modifyProductToCart } = require('../Controller/cartController');
const {isLoggedIn} = require('../Validations/authValidation');

const cartRouter = express.Router();

cartRouter.get('/', isLoggedIn, getTheCart);
cartRouter.post('/:operation/:productId', isLoggedIn, modifyProductToCart);



module.exports = cartRouter;