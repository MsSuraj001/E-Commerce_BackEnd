const express = require('express');
const { createPizza } = require('../Service/pizzaService');


async function addPizza(req, res){
    try {
        const Pizza = await createPizza({
            pizzaName : req.body.pizzaName,
            pizzaPrice : req.body.pizzaPrice,
            pizzaDescription : req.body.pizzaDescription,
            imagePath : req.file?.path,
            pizzaCotegary : req.body.pizzaCotegary,
            inStock : req.body.inStock,
            quantity : req.body.quantity
        })
        return res.json({
            success : true,
            message : "Successfully added the Pizza",
            data : Pizza,
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

module.exports = {
    addPizza
}