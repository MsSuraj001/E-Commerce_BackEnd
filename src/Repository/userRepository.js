
const { User } = require("../Schema/userSchema");
const { userAddressSchema } = require('../Schema/userAddressSchema');
const { allAddressUser } = require("../Schema/userAddressCartS");

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
        // console.log("this is the Repo res",response);
        return response;
    } catch (error) { 
        console.log(error);
        console.log("User Created error");
    }
}

async function createUserAddress(userAddress){
    try{
        const response = await userAddressSchema.create(userAddress);
        return response;
    }catch(error){
        console.log(error);
        console.log("this is the Repo error");
    }
}

async function createAddress(userId){
    const response = await allAddressUser.create({
        user : userId
    })
    if(!response){
        throw  { reason : "User Address not created"}
    }
    return response;
}

async function getTheUserDetails(userId){
    try{
        const response = await User.findById(userId);
        return response;
    }catch(error){
        console.log(error);
        console.log("Repo error")
    }
}

async function getTheAllAddress(userId){
    try{
        const response = await allAddressUser.findOne({user : userId});
        return response;
    }catch(error){
        console.log(error);
        console.log("Repo error")
    }
}

module.exports = {
    findUserOne,
    createUser,
    createUserAddress,
    getTheUserDetails,
    createAddress,
    getTheAllAddress,
}