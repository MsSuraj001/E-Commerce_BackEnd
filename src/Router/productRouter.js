const express = require('express');
const { addPizza, getPizza, deletePizza } = require('../Controller/pizzaController');
const uploader = require('../Middleweres/multerMiddlewere');
const {addDrink, getDrink, deleteDrink} = require('../Controller/drinkController');
const { isLoggedIn, isAdmin } = require('../Validations/authValidation');

const productRoute = express.Router();
        // this is the Pizza Routers
productRoute.post(
        '/pizza', 
        isLoggedIn, 
        isAdmin,
        uploader.single('pizzaImage'), 
        addPizza,
);
productRoute.get('/pizza/:id',getPizza);
productRoute.delete('/pizza/:id', deletePizza);



        // this is the Drink Router
productRoute.post(
        '/drink', 
        isLoggedIn,
        isAdmin,
        uploader.single('drinkImgPath'), 
        addDrink
);
productRoute.get('/drink/:id', getDrink);
productRoute.delete('/drink/:id', deleteDrink);


module.exports = productRoute
