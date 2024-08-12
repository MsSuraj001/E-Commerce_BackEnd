const { getCart } = require("../Service/cartService");

async function getTheCart(req, res){
    try{
        const cart = await getCart(req.user.id);
        return res.status(200).json({
            success : true,
            message : "Successfully fetch the cart",
            data : cart,
            error : {}
        })
    }catch(error){
        console.log(error);
        console.log("Controller error");
        return res.status(error.statusCode).json({
            success : false,
            message : error.message,
            data : {},
            error : error
        })
    }
}

module.exports = {
    getTheCart
}