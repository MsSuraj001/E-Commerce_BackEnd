const productSchema = require('../Schema/productSchema')

async function createProduct(productDetails){
    try{
        const response = await productSchema.create(productDetails)
        return response
    }catch(error){
        console.log(error);
        console.log("this is the Repository error");
    }
}

async function getIdByProduct(productId){
    try{
        const product = await productSchema.findById(productId);
        return product
    }catch(error){
        console.log(error);
    }
}

async function deleteProductById(productId){
    try{
        const product = await productSchema.findByIdAndDelete(productId);
        return product
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    createProduct,
    getIdByProduct,
    deleteProductById
}