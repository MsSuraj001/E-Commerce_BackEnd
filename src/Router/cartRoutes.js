const express = require('express');
const { getTheCart, modifyProductToCart, addDrink, clearCartWithUser } = require('../Controller/cartController');
const {isLoggedIn} = require('../Validations/authValidation');

const cartRouter = express.Router();

cartRouter.get('/', isLoggedIn, getTheCart);
cartRouter.post('/:operation/:productId', isLoggedIn, modifyProductToCart);
cartRouter.delete('/product', isLoggedIn, clearCartWithUser);

// added to the drink to user Id basis
cartRouter.post('/drink/add/:id',isLoggedIn, addDrink)



module.exports = cartRouter;