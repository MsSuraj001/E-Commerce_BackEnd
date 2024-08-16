const Order = require("../Schema/orderSchema");


async function newOrder(orderDetails){
    const response = await Order.create(orderDetails);
    return response;
}

module.exports = {
    newOrder
}