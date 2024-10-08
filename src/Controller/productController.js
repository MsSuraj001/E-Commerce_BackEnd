const express = require('express');
const { createProduct, getIdByProduct, deleteProductById, getAllProductWithAdmin, getAllProductsWithUser } = require('../Service/productService');


async function addProduct(req, res){
    try {
        const Product = await createProduct({
            productName : req.body.productName,
            productPrice : req.body.productPrice,
            productDescription : req.body.productDescription,
            imagePath : req.file?.path,
            productCotegary : req.body.productCotegary,
            productTypes : req.body.productTypes,
            inStock : req.body.inStock,
            quantity : req.body.quantity
        })
        return res.json({
            success : true,
            message : "Successfully added the Pizza",
            data : Product,
            error : {},
        })
    } catch (error) {
        console.log(error);
        return res.json({
            success : false,
            message : error.reason,
            data : {},
            error : error,
        })
    }
}

async function getProduct(req, res){
    try{
       const Product = await getIdByProduct(req.params.id);
       return res.status(200).json({
        success : true,
        message : "Successfully get the Pizza",
        data : Product,
        error : {}
       })
    }catch(error){
        console.log(error);
        return res.status(error.statusCode).json({
            success : false,
            message : error.reason,
            data : {},
            error : error.reasonn
        })
    }
}

async function getAllProuducts(req, res){
    try{
        const Products = await getAllProductWithAdmin();
        return res.status(200).json({
            success : true,
            message : "Successfully get all the Pizzas",
            data : Products,
            error : {},
        })
    }catch(error){
        console.log(error);
        return res.json({
            success : false,
            message : "Not found the products",
            data : {},
            error : error
        })
    }
}

// async function getAllUserProduct(req, res){
//     try{
//         const product = await getAllProductsWithUser();
//         return res.status(200).json({
//             success : true,
//             message : "Successfully get all the Product",
//             data : product,
//             error : {},
//         })
//     }catch(error){
//         console.log("Cont error");
//         console.log(error)
        
//     }
// }

async function deleteProduct(req, res){
    try{
       const Product = await deleteProductById(req.params.id);
       return res.status(200).json({
        success : true,
        message : "Successfully Delete the Pizza",
        data : Product,
        error : {}
       })
    }catch(error){
        console.log(error);
        return res.status(error.statusCode).json({
            success : false,
            message : error.reason,
            data : {},
            error : error.reasonn
        })
    }
}

module.exports = {
    addProduct,
    getProduct,
    deleteProduct,
    getAllProuducts,
    // getAllUserProduct
}