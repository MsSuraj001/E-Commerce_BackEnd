const { getCartByUserId, clearCart } = require("../Repository/cartRepository");
const { newOrder, getOrderByUserId, getOrderById } = require("../Repository/orderRepository");
const { findUserOne } = require("../Repository/userRepository");

async function createOrder(userId, paymentMethod){
    const cart = await getCartByUserId(userId);
    const user = await findUserOne({ _id : cart.user });

    if(!cart){
        throw new Error("Cart is not Found");
    }

    if(!user){
        throw new Error("User is not Found");
    }

    if(cart.items.length === 0){
        throw new Error("Cart is Empty so Please add the some product in your cart");
    }

    const orderObject = {};

    orderObject.user = cart.user;
    // console.log(orderObject);
    

    orderObject.items = cart.items.map(cartItem => {
        return { product : cartItem.product._id, quantity : cartItem.quantity}
    })
    // console.log(orderObject);
    

    orderObject.status = 'ORDERED'
    orderObject.totalPrice = 0;
    console.log(typeof(orderObject.totalPrice));
    
    console.log(orderObject.items);
    
    orderObject.items.forEach( (cartItem) => {
        orderObject.totalPrice += cartItem.quantity * cartItem.product.productPrice;
        // orderObject.totalPrice = orderObject.totalPrice + (cartItem.quantity * cartItem.product.price);
    })
    
    orderObject.paymentMethod = paymentMethod
    // console.log(orderObject); it's working

    const order = await newOrder(orderObject);
    console.log("Final",order);

    if(!order){
        throw new Error("Order is not created");
    }

    await clearCart(userId);
    return order
}

async function getOrderDetails(userId){
    const order = await getOrderByUserId(userId);
    if(!order){
        throw new Error("Order is not Found");
    }
    return order
}

async function getOrderDetailsById(orderId){
    const order = await getOrderById(orderId);
    if(!order){
        throw new Error("Order is not Found");
    }
    return order;
}

module.exports = {
    createOrder,
    getOrderDetails,
    getOrderDetailsById
}