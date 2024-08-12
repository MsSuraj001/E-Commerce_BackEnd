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

module.exports = {
    isLoggedIn
}