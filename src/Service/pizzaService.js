const cloudinary = require('../Config/cloudinayConfig');
const fs = require('fs/promises')
const pizzaRepository = require('../Repository/pizzRepository')

async function createPizza(pizzaDetails){
    // try{
        const imagePath = pizzaDetails.imagePath;
        // console.log(imagePath);
        
        if(imagePath){
            try{
                const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
                var pizzaImage = cloudinaryResponse.secure_url;
                // console.log(pizzaImage);
                await fs.unlink(imagePath)
            }catch(error){
                console.log(error);
                throw { reason : "Not able to create Produt", status : 500};
            }
        }

        const pizza = await pizzaRepository.createPizza({
            ...pizzaDetails,
            pizzaImage : pizzaImage
        });

        if(!pizza){
            throw {reason : "Not able to create Product", status : 500};
        }


        return pizza;
    // }catch(error){
    //     console.log(error);
    //     console.log("this is the service error");
    // }
}

module.exports = {
    createPizza
}