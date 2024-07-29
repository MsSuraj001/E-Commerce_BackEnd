
const { User } = require("../Schema/userSchema");

async function findUserOne(parameter){
    try{
        const response = await User.findOne({...parameter});
        // console.log("this is the findOne",response);
        return response;
    }catch(error){
        console.log(error);
        console.log("find user error");
    }
}

async function createUser(userDetails){
    try {
        const response = await User.create(userDetails);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
        console.log("User Created error");
    }
}

module.exports = {
    findUserOne,
    createUser,
}