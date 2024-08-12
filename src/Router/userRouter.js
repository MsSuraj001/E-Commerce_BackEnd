const express = require('express');
const { userCreate } = require('../Controller/userController');
const uploader = require('../Middleweres/multerMiddlewere');

const routes = express.Router();

routes.post('/', uploader.single('image'), userCreate);

module.exports = {
    routes
}