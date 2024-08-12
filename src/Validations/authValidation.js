const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../Config/serverConfig');

async function isLoggedIn(req, res, next){
    const token = req.cookies["authToken"];

    if(!token){
        return res.status(401).json({
            success : false,
            data : {},
            error : "Not authoticated",
            message : "No auth token provided"
        })
    }

    
    try{
        const decoded = jwt.verify(token, JWT_SECRET_KEY);

        if(!decoded){
            throw { reason : "Not authonticted person"}
        }

        req.user = {
            email : decoded.email,
            id : decoded.id,
            role : decoded.role
        }
        next()
    }catch(error){
        return res.status(401).json({
            success : false,
            data : {},
            error : "Not authonticated",
            message : "Invalied Auth Token"
        })
    }
}

async function isAdmin(req, res, next){
    const loggedInUser = req.user;
    console.log("this is the ",loggedInUser);
    console.log(loggedInUser.role);
    
    if(loggedInUser.role === "ADMIN"){
        console.log("User is an Admin");
        next()
    }else{
        return res.status(401).json({
            success : false,
            message : "You are not authorise for this action",
            data : {},
            error : {
                statusCode : 401,
                reason : "Unauthorised user for this action",
            }
        })
    }
    
}

module.exports = {
    isLoggedIn,
    isAdmin,
}