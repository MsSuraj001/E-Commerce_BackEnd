const express = require('express');
const { addPizza } = require('../Controller/pizzaController');
const uploader = require('../Middleweres/multerMiddlewere');

const pizzaRoute = express.Router();

pizzaRoute.post('/', uploader.single('pizzaImage'), addPizza);

module.exports = pizzaRoute
