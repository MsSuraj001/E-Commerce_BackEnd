const drinkSchema = require('../Schema/drinkSchema')

async function createDrink(drinkDetails){
    try{
        const response = drinkSchema.create(drinkDetails);
        return response;
    }catch(error){
        console.log(error);
        console.log("Can't able to create Drink");
    }
}

async function getDrinkById(drinkId){
    try{
        const drink = await drinkSchema.findById(drinkId)
        return drink;
    }catch(error){
        console.log(error);
        
    }
}

async function deleteDrinkById(drinkId){
    try{
        const drink = await drinkSchema.findByIdAndDelete(drinkId);
        return drink;
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    createDrink,
    getDrinkById,
    deleteDrinkById
};