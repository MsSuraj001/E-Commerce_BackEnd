const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { findUserOne } = require('../Repository/userRepository');
const { JWT_SECRET_KEY, JWT_EXPIRY } = require('../Config/serverConfig');


async function loginUser(authDetails){
    const email = authDetails.email
    const planePassword = authDetails.password 

    const user = await findUserOne({ email });
    if(!user){
        // const error = new error("No user found with the given email");
        // error.status = 404
        // throw error;
        throw { reason : "User not found with the given email", status : 404}
    }

    const isPasswordValidation = await bcrypt.compare(planePassword, user.password)

    if(!isPasswordValidation){
        // const error = new error("Invalid password please try again");
        // error.status = 404
        // throw error

        throw { reason : "Invalid Password please try again"}
    }
    
    const userRole = user.role ? user.role : "USER";
    const token = jwt.sign({email : user.email, id : user._id, role : userRole}, JWT_SECRET_KEY, {
        expiresIn : JWT_EXPIRY
    });
    console.log("this is the authser provided token",token);
    return token
} 

module.exports = {
    loginUser
}