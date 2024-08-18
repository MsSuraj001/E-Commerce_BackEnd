const cloudinary = require('../Config/cloudinayConfig');
const fs = require('fs/promises')
const productRepository = require('../Repository/productRepository')

async function createProduct(productDetails){
    // try{
        const imagePath = productDetails.imagePath;
        // console.log(imagePath);
        
        if(imagePath){
            try{
                const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
                var productImage = cloudinaryResponse.secure_url;
                // console.log(productImage);
                await fs.unlink(process.cwd() + "/" + imagePath)
            }catch(error){
                console.log(error);
                throw { reason : "Not able to create Produt", status : 500};
            }
        }

        const product = await productRepository.createProduct({
            ...productDetails,
            productImage : productImage
        });

        if(!product){
            throw {reason : "Not able to create Product", status : 500};
        }


        return product;
    // }catch(error){
    //     console.log(error);
    //     console.log("this is the service error");
    // }
}

async function getIdByProduct(productId){
    try{
        const response = productRepository.getIdByProduct(productId)
        if(!response){
            throw {reason : "Not able to get Product", status : 500};
        }
        return response;
    }catch(error){
        console.log(error);
    }
}

async function getAllProductWithAdmin(){
    const products = await productRepository.getAllProducts();
    if(!products){
        throw { message : "Not product is found"}
    }
    return products;
}

async function deleteProductById(productId){
    try{
        const response = await productRepository.deleteProductById(productId);
        if(!response){
            throw {reason : "Not able to delete Product", status : 500};
        }
        return response;
    }catch(error){
        console.log(error);
        
    }
}

module.exports = {
    createProduct,
    getIdByProduct,
    deleteProductById,
    getAllProductWithAdmin,
}