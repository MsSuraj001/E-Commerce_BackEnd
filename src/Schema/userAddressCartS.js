
const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
        unique : true,
    },
    allAddresses : [
        {
            address : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'userAddress',
                required : true,
            }
        }
    ]

}, {timeseries : true, timestamps : true})

const userAddressSchema = mongoose.model("UserAddressCart", Schema)

module.exports = {
    userAddressSchema
}