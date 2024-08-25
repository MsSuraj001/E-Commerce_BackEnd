const express = require('express');
const { userCreate, addUserAddress } = require('../Controller/userController');
const uploader = require('../Middleweres/multerMiddlewere');
const { isLoggedIn } = require('../Validations/authValidation');

const routes = express.Router();

routes.post('/', uploader.single('image'), userCreate);
routes.post('/address', isLoggedIn, addUserAddress);

module.exports = {
    routes
}