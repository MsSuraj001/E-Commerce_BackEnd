
const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
    fullName : {
        type: String,
        required: true,
        min : [5, "Atleast min 5 character in full name"],
        max : [20, "Atleast max 20 character in full name"],
        lowercase : true,
    },
    mobileNumber :{
        type : Number,
        required : true,
    },
    state : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    pinCode : {
        type : Number,
        required : true,
        // length : 6
    },
    landMark : {
        type : String,
        required : true,
        min : [10, "Atleast min 5 character in landMark"],
        max : [40, "Atleast max 20 character in lankMark"],
    },
    roadName : {
        type : String,
        required : true,
        min : [8, "Atleast min 5 character in roadName"],
        max : [20, "Atleast max 20 character in roadName"],
    }
}, {timeseries : true, timestamps : true})

const userAddressSchema = mongoose.model("userAddress", Schema)

module.exports = {
    userAddressSchema
}