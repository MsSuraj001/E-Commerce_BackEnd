const Cart = require('../Schema/cartSchema')

async function createCart(userId){
    try{
        const newCart = await Cart.create({
            user : userId
        })
        return newCart;
    }catch(error){
        console.log("Repo Cart Error");
        console.log(error)
    }
}

async function getCartByUserId(userId){
    try{
        const cart = await Cart.findOne({
            user : userId
        })
        if(!cart){
            throw { message : "Cart Not Found Repo"}
        }
        return cart;
    }catch(error){
        console.log(error);
        
    }
}

module.exports = {
    createCart,
    getCartByUserId
}