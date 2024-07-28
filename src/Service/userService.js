
const { findUserOne, createUser } = require("../Repository/userRepository")

async function registerUser(userDetails){
    const user = await findUserOne({
        email : userDetails.email,
        mobileNumber : userDetails.mobileNumber
    })
    // if(user){
    //     console.log("already presented");
    //     throw {reason:'User with the given Mobile Number & Email id already exist', status: 400}
    // }

    if(user) {
        const error = new Error('User with the given Mobile Number & Email id already exist');
        error.status = 400;
        throw error;
    }
        const newUser = await createUser({
            firstName : userDetails.firstName,
            lastName : userDetails.lastName,
            email : userDetails.email,
            mobileNumber : userDetails.mobileNumber,
            password : userDetails.password,
            age : userDetails.age,
            gender : userDetails.gender,
            role : userDetails.role,
        });
        if(!newUser){
            const error = new Error('Something went wrong User not registarted');
            error.status = 500;
            throw error;
        }
        return newUser;
    

    
}

module.exports = {
    registerUser
}