const cloudinary = require('../Config/cloudinayConfig')
const fs = require('fs/promises')
const { findUserOne, createUser, createUserAddress, getTheUserDetails } = require("../Repository/userRepository");
const { createCart } = require('../Repository/cartRepository');

async function registerUser(userDetails){
    // console.log(userDetails);
    
    const user = await findUserOne({
        email : userDetails.email,
        mobileNumber : userDetails.mobileNumber
    })
    // console.log("already presented user",user);
    

    if(user) {
        const error = new Error('User with the given Mobile Number & Email id already exist');
        error.status = 400;
        throw error;
        // throw { reason : 'User with the given Mobile Number & Email id already exist', status: 400}
    }
    
    const userImg = userDetails.image;
    // console.log(userImg);  // it's working
    

    if(userImg){
        try{
            const cloudinaryResponse = await cloudinary.uploader.upload(userImg);
            // console.log(cloudinaryResponse);   // it's working         
            var userImage = cloudinaryResponse.secure_url
            await fs.unlink(process.cwd() + "/" + userImg);
        }catch(error){
            console.log(error);
            throw {reason : 'Failed to upload image to cloudinary', status : 500}
        }
    }

    const userWithImg = await createUser({
        ...userDetails,
        image : userImage
    })
    // console.log(userWithImg);
    
    await createCart(userWithImg._id);

    if(!userWithImg){
        console.log("not given the user Image");
        throw {reason : "Something is missing on your userDetails"}
    }
    
    return userWithImg;

    
}

async function registerUserAddress(userAddress){
    try{
        const userAddressRes = await createUserAddress(userAddress);
        return userAddressRes;
    }catch(error){
        console.log(error);
        console.log("Ser error")
    }
}

async function userDetails(userId){
    try{
        const userRes = await getTheUserDetails(userId);
        return userRes;
    }catch(errro){
        console.log(errro);
        console.log("service error")
    }
}

module.exports = {
    registerUser,
    registerUserAddress,
    userDetails
}