const pizzaSchema = require('../Schema/pizzSchema')

async function createPizza(pizzaDetails){
    try{
        const response = await pizzaSchema.create(pizzaDetails)
        return response
    }catch(error){
        console.log(error);
        console.log("this is the Repository error");
    }
}

module.exports = {
    createPizza
}