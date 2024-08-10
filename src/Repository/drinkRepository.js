const drinkSchema = require('../Schema/drinkSchema')

async function createDrink(drinkDetails){
    console.log("repository layer");
    try{
        const response = drinkSchema.create(drinkDetails);
        return response;
    }catch(error){
        console.log(error);
        console.log("Can't able to create Drink");
        
    }
}

module.exports = {
    createDrink
};