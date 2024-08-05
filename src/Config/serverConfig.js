const dotenv = require('dotenv');
const express = require('express');

dotenv.config();

module.exports= {
    PORT: process.env.PORT || 3000,
    DB_URL : process.env.DB_URL,
    JWT_SECRET_KEY : process.env.JWT_SECRET,
    JWT_EXPIRY : process.env.JWT_EXPIRY,

    CLOUDINARY_NAME : process.env.CLOUDINARY_NAME,
    CLOUDINARY_API_KEY : process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_SECRET_KEY : process.env.CLOUDINARY_API_SECRET,
}