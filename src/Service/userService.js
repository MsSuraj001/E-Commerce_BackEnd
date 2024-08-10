
const { findUserOne, createUser } = require("../Repository/userRepository")

async function registerUser(userDetails){
    const user = await findUserOne({
        email : userDetails.email,
        mobileNumber : userDetails.mobileNumber
    })

    if(user) {
        // const error = new Error('User with the given Mobile Number & Email id already exist');
        // error.status = 400;
        // throw error;
        throw { reason : 'User with the given Mobile Number & Email id already exist', status: 400}
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
            throw { reason : 'Something went wrong User not registarted', status : 500}
        }
        return newUser;
    

    
}

module.exports = {
    registerUser
}