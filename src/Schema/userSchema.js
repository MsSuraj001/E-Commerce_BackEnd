const express = require('express');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        min : [5, "Atleast min 5 character in first name"],
        max : [20, "Atleast max 20 character in first name"],
        required: true,
        lowercase : true,
    },
    lastName: {
        type: String,
        min : [5, "Atleast min 5 character in last-name"],
        max : [20, "Atleast max 20 character in last-name"],
        required : true,
        lowercase : true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
        match:  [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    mobileNumber : {
        type: Number,
        required: true,
        unique : true,
        // min : [10, "atleast at the minimun 10 digit mobileNumber"],
        // max : [12, "atleast at the minimun 12 digit mobileNumber"],
    },
    password : {
        type: String,
        required: true,
        unique : true,
        min : [6, "atleast at the minimum 6 digit password"],
        max : [8, "atleast at the minimum 6 digit password"],
    },
    role : {
        type: String,
        enum : ['USER', 'ADMIN'],
        default : "USER",
    },
    gender : {
        type : String,
    },
    age : {
        type : Number,
    }

}, {timeseries: true, timestamps: true});

const User = mongoose.model("Users", userSchema);

module.exports = {
    User
}