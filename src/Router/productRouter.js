const express = require('express');
const { addProduct, getProduct, deleteProduct, getAllProuducts, getAllUserProduct } = require('../Controller/productController');
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
productRoute.get('/:id', isAdmin,getProduct);
productRoute.get('/', isLoggedIn, getAllProuducts);
productRoute.delete('/:id', isAdmin, deleteProduct);
// productRoute.get('/user', isLoggedIn, getAllUserProduct);


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
