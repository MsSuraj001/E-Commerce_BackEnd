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

async function getIdByPizza(pizzaId){
    try{
        const pizza = await pizzaSchema.findById(pizzaId);
        return pizza
    }catch(error){
        console.log(error);
    }
}

async function deletePizzaById(pizzaId){
    try{
        const pizza = await pizzaSchema.findByIdAndDelete(pizzaId);
        return pizza;
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    createPizza,
    getIdByPizza,
    deletePizzaById
}