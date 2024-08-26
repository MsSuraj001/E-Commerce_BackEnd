const express = require('express');
const { userCreate, addUserAddress, getUserDetails } = require('../Controller/userController');
const uploader = require('../Middleweres/multerMiddlewere');
const { isLoggedIn } = require('../Validations/authValidation');

const routes = express.Router();

routes.post('/', uploader.single('image'), userCreate);
routes.post('/address', isLoggedIn, addUserAddress);
routes.get('/get', isLoggedIn, getUserDetails)

module.exports = {
    routes
}