const express = require('express');
const mongoose = require('mongoose');

const couldDrink = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required : true,
    },
    weight : {
        type: Number,
        required : ture
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