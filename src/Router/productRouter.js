const express = require('express');
const { addProduct, getProduct, deleteProduct } = require('../Controller/productController');
const uploader = require('../Middleweres/multerMiddlewere');
const {addDrink, getDrink, deleteDrink} = require('../Controller/drinkController');
const { isLoggedIn, isAdmin } = require('../Validations/authValidation');

const productRoute = express.Router();
        // this is the Pizza Routers
productRoute.post(
        '/', 
        isLoggedIn, 
        isAdmin,
        uploader.single('productImage'), 
        addProduct,
);
productRoute.get('/:id',getProduct);
productRoute.delete('/:id', deleteProduct);



        // this is the Drink Router
// productRoute.post(
//         '/drink', 
//         isLoggedIn,
//         isAdmin,
//         uploader.single('drinkImgPath'), 
//         addDrink
// );
// productRoute.get('/drink/:id', getDrink);
// productRoute.delete('/drink/:id', deleteDrink);


module.exports = productRoute
