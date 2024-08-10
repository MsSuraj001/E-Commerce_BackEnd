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
                await fs.unlink(process.cwd() + "/" + imagePath)
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

async function getIdByPizza(pizzaId){
    try{
        const response = pizzaRepository.getIdByPizza(pizzaId)
        if(!response){
            throw {reason : "Not able to get Product", status : 500};
        }
        return response;
    }catch(error){
        console.log(error);
    }
}

async function deletePizzaById(pizzaId){
    try{
        const response = await pizzaRepository.deletePizzaById(pizzaId);
        if(!response){
            throw {reason : "Not able to delete Product", status : 500};
        }
        return response;
    }catch(error){
        console.log(error);
        
    }
}

module.exports = {
    createPizza,
    getIdByPizza,
    deletePizzaById
}