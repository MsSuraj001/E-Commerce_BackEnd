const express = require('express');
const { createPizza, getIdByPizza, deletePizzaById } = require('../Service/pizzaService');


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

async function getPizza(req, res){
    try{
       const Pizza = await getIdByPizza(req.params.id);
       return res.status(200).json({
        success : true,
        message : "Successfully get the Pizza",
        data : Pizza,
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

async function deletePizza(req, res){
    try{
       const Pizza = await deletePizzaById(req.params.id);
       return res.status(200).json({
        success : true,
        message : "Successfully Delete the Pizza",
        data : Pizza,
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
    addPizza,
    getPizza,
    deletePizza
}