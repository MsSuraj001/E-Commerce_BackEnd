const express = require('express');
const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');

async function dbconntions(){
    try{
        await mongoose.connect(serverConfig.DB_URL);
        console.log("Server connections successfully");
    }catch(error){
        console.log(error);
        console.log('Data-base conntions error');
    }
}

module.exports = dbconntions;