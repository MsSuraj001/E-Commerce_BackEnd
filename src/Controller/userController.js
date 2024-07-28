
const { registerUser } = require("../Service/userService")

async function userCreate(req, res){
    try{
        const response = await registerUser(req.body);
        return res.status(201).json({
            success : true,
            data : response,
            message : "User Created Successfully",
            error : {}
        })
    }catch(error){
        return res.status(500).json({
            success : false,
            data : {},
            message : "Internal Server Error",
            error : error.message
        })
    }
}

module.exports = {
    userCreate
}