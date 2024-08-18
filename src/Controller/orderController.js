const { createOrder, getOrderDetails } = require("../Service/orderService");

async function createNewOrder(req, res){
    try{
        const order = await createOrder(req.user.id, req.body.paymentMethod);
        return res.status(201).json({
            success : true,
            message : "Order created successfully",
            data : order,
            error : {}
        })
    }catch(error){
        console.error(error);
        return res.status(error.statusCode).json({
            success : false,
            message : "Order Not Careted",
            data : null,
            error : error
        })
    }
    
}

async function getAllOrderDetailsByUserId(req, res){
    try{
        const order = await getOrderDetails(req.user.id);
        return res.status(200).json({
            success : true,
            message : "Order Details Retrieved Successfully",
            data : order,
            error : {}
        })
    }catch(error){
        console.error(error);
        return res.status(error.statusCode).json({
            success : false,
            message : "Order Not Found",
            data : {},
            error : error
        })
    }
}

module.exports = {
    createNewOrder,
    getAllOrderDetailsByUserId,
}