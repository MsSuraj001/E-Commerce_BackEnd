const express = require('express');
const {createDrink, getDrinkById, deleteDrinkById} = require('../Service/drinkService');

async function addDrink(req, res){
    console.log(req.body);
    try{
        const drink = await createDrink({
            drinkName: req.body.drinkName,
            drinkPrice: req.body.drinkPrice,
            drinkWeight : req.body.drinkWeight,
            quantity : req.body.quantity,
            inStock: req.body.inStock,
            drinkImgPath : req.file?.path
        })
        return res.json({
            message: 'Drink added successfully',
            data: drink,
            error : {},
            success : true
        })
    }
    catch(error){
        console.log(error);
        console.log("Drink Controller error");
        return res.json({
            message: 'Drink Not added',
            drink: {},
            error : error.reason,
            success : false
        })
    }
}

async function getDrink(req, res){
    try{
        const drink = await getDrinkById(req.params.id);
        return res.status(200).json({
            success : true,
            messagge : "Successfully get the Drink",
            data : drink,
            error: {}
        })
    }catch(error){
        console.log(error);
        return res.status(error.statusCode).json({
            success : false,
            message : "Can't get the Drink",
            data : {},
            error: error.reason
        })
        
    }
}

async function deleteDrink(req, res){
    try{
        const drink = await deleteDrinkById(req.params.id);
        return res.status(200).json({
            success : true,
            message : "Drink deleted successfully",
            data : drink,
            error : {}
        })
    }catch(error){
        console.log(error);
        return res.status(error.statusCode).json({
            success : false,
            message: "Drink not deleted",
            data : {},
            error : error.reason
        })
    }
}

module.exports = {
    addDrink,
    getDrink,
    deleteDrink
}