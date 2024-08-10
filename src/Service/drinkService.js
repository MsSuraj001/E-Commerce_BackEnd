const cloudinary = require('../Config/cloudinayConfig');
const { log } = require('console');
const fs = require('fs/promises');
const drinkRepository = require('../Repository/drinkRepository');

async function createDrink(drinkDetails){
    
    const drinkImgPath = drinkDetails.drinkImgPath;

    if(drinkImgPath){
        try{
            const cloudinaryResponse = await cloudinary.uploader.upload(drinkImgPath);
            var imgPathD = cloudinaryResponse.secure_url;
            await fs.unlink(process.cwd() + "/" + drinkImgPath)
        }catch(err){
            console.log(err);
            throw { reason : "Not able to create Drink"}
        }
    }

    const drink = await drinkRepository.createDrink({
        ...drinkDetails,
        drinkImg : imgPathD
    })

    if(!drinkImgPath){
        throw { reason : "Not able to create Drink"}
    }

    return drink
}

async function getDrinkById(drinkId){
    try{
        const response = await drinkRepository.getDrinkById(drinkId);
        if(!response){
            throw { reason : "Drink not found" }
        }
        return response;
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    createDrink,
    getDrinkById
};