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

module.exports = {
    createCart
}