const mongoose = require('mongoose')


const Schema = new mongoose.Schema({
    pizzaName : {
        type : String,
        required : true,
    },
    pizzaPrice : {
        type : Number,
        required : true,
    },
    pizzaDescription : {
        type : String,
        required : true,
        min : [20, "min-length of pizzDescription atleast of 20 charchters"],
        max : [50, "max-length of pizzDescription atleast of 50 charchters"]
    },
    pizzaCotegary : {
        type : String,
        required : true,
        enum : ["veg", "non-veg", "mixed"]
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

const PizzaShcema = mongoose.model('PizzaSchema', Schema);

module.exports = PizzaShcema;