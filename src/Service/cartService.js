const { createCart } = require("../Repository/cartRepository");

async function getCart(userId){
    try{
        const cart = await createCart(userId);
        if(!cart){
            throw new Error("Cart not found");
        }
        return cart;
    }catch(error){
        console.log("Cart Ser error");
        console.log(error);
    }
}

module.exports = {
    getCart
}