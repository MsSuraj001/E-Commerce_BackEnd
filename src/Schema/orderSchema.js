const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        requierd : true
    },
    items : [
        {
            product : {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Product',
                requierd : true
            },
            quantity : {
                type : Number,
                requierd : true,
                default : 1,
            }
        }
    ],
    totalPrice : {
        type : Number,
        requierd : true,
    },
    status : {
        type : String,
        default : "ORDERED",
        enum : ["ORDERED", "CANCELED", "PROCESSING", "OUT-FOR-DELEVERY"]
    },
    address : {
        type : String,
        min : [10, "address should be atleast 10 characters"]
    },
    paymentMethod : {
        type : String,
        enum : ["CASH", "ONLINE"],
        default : "CASH"
    }
}, { timestamps : true});

const Order = new mongoose.model('Orders', orderSchema);

module.exports = Order;