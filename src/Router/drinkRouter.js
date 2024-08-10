const express = require('express');
const addDrink = require('../Controller/drinkController');
const uploader = require('../Middleweres/multerMiddlewere');
const drinkRoute = express.Router();

drinkRoute.post('/', uploader.single("drinkImgPath"), addDrink);


module.exports = drinkRoute;