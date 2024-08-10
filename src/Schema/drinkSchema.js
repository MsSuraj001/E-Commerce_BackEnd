const express = require('express');
const mongoose = require('mongoose');

const couldDrink = new mongoose.Schema({
    drinkName: {
        type: String,
        required: true
    },
    drinkPrice : {
        type: Number,
        required : true,
    },
    drinkWeight : {
        type: String,
        required : true
    },
    quantity : {
        type : Number,
        required : true,
        min : [20, "Please added the min quatity of 10 Product"]
    },
    inStock : {
        type : Boolean,
        required : true
    },

})

const Drink = mongoose.model("Drink", couldDrink)

module.exports = Drink