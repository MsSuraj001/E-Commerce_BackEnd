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

    const decoded = jwt.verify(token, JWT_SECRET_KEY);

    if(!decoded){
        return res.status(401).json({
            success : false,
            data : {},
            error : "Not authonticated",
            message : "Invalied Auth Token"
        })
    }

    req.user = {
        email : decoded.email,
        id : decoded.id
    }

    next();
}

module.exports = {
    isLoggedIn
}