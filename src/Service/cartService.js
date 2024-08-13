const { getCartByUserId } = require("../Repository/cartRepository");

async function getCart(userId){
    const cart = await getCartByUserId(userId);
    if(!cart){
        throw { message : "Cart Not Found Ser"}
    }
    return cart;
}

module.exports = {
    getCart
}