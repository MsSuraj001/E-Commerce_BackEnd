const Order = require("../Schema/orderSchema");


async function newOrder(orderDetails){
    const response = await Order.create(orderDetails);
    return response;
}

async function getOrderByUserId(userId){
    const response = await Order.find({user: userId}).populate('items.product');
    return response;
}

async function getOrderById(orderId){
    const response = await Order.findById(orderId).populate('items.product');
    return response;
}

async function updateOrderStatus(orderId, status){
   try{
    const response = await Order.findByIdAndUpdate(orderId, {status: status}, {new: true});
    return response;
   }
   catch(error){
    console.log(error);
   }

}

module.exports = {
    newOrder,
    getOrderByUserId,
    getOrderById,
    updateOrderStatus
}