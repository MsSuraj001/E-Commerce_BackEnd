const Order = require("../Schema/orderSchema");


async function newOrder(orderDetails){
    const response = await Order.create(orderDetails);
    return response;
}

async function getOrderByUserId(userId){
    const response = await Order.find({user: userId}).populate('items.product');
    return response;
}

module.exports = {
    newOrder,
    getOrderByUserId
}