const express = require('express');
const { addPizza, getPizza, deletePizza } = require('../Controller/pizzaController');
const uploader = require('../Middleweres/multerMiddlewere');
const addDrink = require('../Controller/drinkController');

const productRoute = express.Router();
        // this is the Pizza Routers
productRoute.post('/pizza', uploader.single('pizzaImage'), addPizza);
productRoute.get('/pizza/:id',getPizza);
productRoute.delete('/pizza/:id', deletePizza);



        // this is the Drink Router
productRoute.post('/drink', uploader.single('drinkImgPath'), addDrink);


module.exports = productRoute
