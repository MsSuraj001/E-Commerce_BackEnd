const { getCartByUserId, clearCart } = require("../Repository/cartRepository");
const { getDrinkById } = require("../Repository/drinkRepository");
const { getIdByProduct } = require("../Repository/productRepository");

async function getCart(userId){
    const cart = await getCartByUserId(userId);
    if(!cart){
        throw { message : "Cart Not Found Ser"}
    }
    return cart;
}

async function modifyCart(userId, productId, shouldAdd = 'add'){
    const quanatityValue = (shouldAdd == true) ? 1 : -1;
    const cart = await getCart(userId);
    const product = await getIdByProduct(productId);
    if(!product){
        throw { reason : "Currently Produt is not available"}
    }

    if(!product.inStock && product.quantity <= 0){
        throw { reason : "Product is currently Out-of-Stock"}
    }

    let foundProduct = false;
    cart.items.forEach(items => {       // issue the first product add in cart not show the product details
        // console.log("Out side", items.product);
        if(items.product._id == productId){
            if(shouldAdd){
                // console.log("inside", items.product);
                if(product.quantity >= items.quantity + 1){
                    items.quantity += quanatityValue;
                }else{
                    throw { reason : "The quanatity of the item req is not available", statusCode : 404}
                }
            }else{
                if(items.quantity > 0){
                    items.quantity += quanatityValue;
                    console.log(items.quantity);
                    
                    if(items.quantity == 0){        // problem is here
                        console.log(cart.items);
                        cart.items = cart.items.filter(items => items.product._id != productId);
                        foundProduct = true;
                        return;
                    }
                }else{
                    throw { reason : "The quanatity of the item req is not available", statusCode : 404}
                }
            }
            foundProduct = true;
        }
    })

    if(!foundProduct){
        if(shouldAdd){
            cart.items.push({
                product : productId,
                quantity : 1
            })
        }else{
            throw {reason : "Product not found in the cart"}
        }
    }

    await cart.save();
    return cart;
}

async function addDrinkToCartById(userId, id){
    const cart = await getCart(userId);
    // console.log(cart);
    
    const product = await getDrinkById(id);
    // console.log(product);
    if(!product.inStock && product.quantity > 0){
        throw new {message : "Product is currently not available in your requirement"}
    }
    if(!product){
        throw {reason : "Product is out of stock"}  
    }

    cart.items.forEach(items =>{
        console.log(cart.items.product)
    })

    cart.items.push({
        product : id,
        quantity : 1
    })

    await cart.save();
    return cart;
}

async function clearCartByUserId(userId){
    const response = await clearCart(userId);
    return response;
}

module.exports = {
    getCart,
    modifyCart,
    addDrinkToCartById,
    clearCartByUserId,
}