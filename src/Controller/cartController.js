const { getCart, modifyCart, addDrinkToCartById } = require("../Service/cartService");

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

async function modifyProductToCart(req, res){
    try{
        const cart = await modifyCart(req.user.id, req.params.productId, req.params.operation == 'add');
        return res.status(200).json({
            success : true,
            message : "Successfully modify the product to cart",
            data : cart,
            error : {}
        })
    }catch(error){
        console.log(error);
        res.status(error.statusCode).json({
            success : false,
            message : error.message,
            data : {},
            error : error
        })
    }
}

async function addDrink(req, res){
    console.log(req.user.id)
    console.log(req.params.id);
    
    try{
        const drink = await addDrinkToCartById(req.user.id, req.params.id);
        return res.status(200).json({
            success : true,
            message : "Successfully add the drink to cart",
            data : drink,
            error : {}
        })
    }catch(error){
        console.log(error);
        console.log("Controller error")
    }
}

module.exports = {
    getTheCart,
    modifyProductToCart,
    addDrink,
}