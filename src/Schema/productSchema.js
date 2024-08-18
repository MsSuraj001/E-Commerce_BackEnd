const mongoose = require('mongoose')


const Schema = new mongoose.Schema({
    productName : {
        type : String,
        required : true,
    },
    productPrice : {
        type : Number,
        required : true,
    },
    productDescription : {
        type : String,
        required : true,
        min : [20, "min-length of pizzDescription atleast of 20 charchters"],
        max : [50, "max-length of pizzDescription atleast of 50 charchters"]
    },
    productCotegary : {
        type : String,
        required : true,
        enum : ["veg", "non-veg", "mixed"]
    },
    productImage : {
        type : String,
    },
    productTypes : {
        type : String,
        enum : ['pizza', 'drink', 'sideItems', 'carryBag']
    },
    inStock : {
        type : Boolean,
    },
    quantity : {
        type : Number,
        min : [10, "Please added the min quatity of 10"],
        default : 10,
    }
})

const ProductShcema = mongoose.model('Product', Schema);

module.exports = ProductShcema;