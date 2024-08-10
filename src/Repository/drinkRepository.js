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

module.exports = {
    createDrink
};