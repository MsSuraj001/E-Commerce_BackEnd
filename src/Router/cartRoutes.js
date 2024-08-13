const express = require('express');
const { getTheCart } = require('../Controller/cartController');
const {isLoggedIn} = require('../Validations/authValidation');

const cartRouter = express.Router();

cartRouter.get('/', isLoggedIn, getTheCart);



module.exports = cartRouter;