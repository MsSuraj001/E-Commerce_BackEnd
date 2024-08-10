const express = require('express');
const createDrink = require('../Service/drinkService');

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

module.exports = addDrink