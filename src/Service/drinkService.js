const cloudinary = require('../Config/cloudinayConfig');
const { log } = require('console');
const fs = require('fs/promises');
const drinkRepository = require('../Repository/drinkRepository');

async function createDrink(drinkDetails){
    console.log("this is the service layer");
    
    const drinkImgPath = drinkDetails.drinkImgPath
    console.log(drinkImgPath)

    if(drinkImgPath){
        try{
            const cloudinaryResponse = await cloudinary.uploader.upload(drinkImgPath);
            var imgPathD = cloudinaryResponse.secure_url;
            await fs.unlink(drinkImgPath)
        }catch(err){
            console.log(err);
            throw { reason : "Not able to create Drink 1"}
        }
    }

    const drink = await drinkRepository.createDrink({
        ...drinkDetails,
        drinkImg : imgPathD
    })

    if(!drinkImgPath){
        throw { reason : "Not able to create Drink 2"}
    }

    return drink
}

module.exports = createDrink;