const express = require('express');
const { getTheCart } = require('../Controller/cartController');

const cartRoutes = express.Router();

cartRoutes.get('/:id', getTheCart);



module.exports = cartRoutes;