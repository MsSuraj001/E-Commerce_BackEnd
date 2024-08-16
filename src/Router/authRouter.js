const express = require('express');
const { logIn, logOut } = require('../Controller/authController');

const authRoutes = express.Router();

authRoutes.post('/login', logIn);
authRoutes.post('/logOut', logOut);

module.exports = {
    authRoutes
}