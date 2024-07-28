const express = require('express');
const { userCreate } = require('../Controller/userController');

const routes = express.Router();

routes.post('/', userCreate);

module.exports = {
    routes
}