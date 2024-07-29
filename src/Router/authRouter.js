const express = require('express');
const { logIn } = require('../Controller/authController');

const authRoutes = express.Router();

authRoutes.post('/login', logIn);

module.exports = {
    authRoutes
}