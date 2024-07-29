const { loginUser } = require("../Service/authService")


async function logIn(req, res){
    try{
        const loginPayload = req.body
        const response =await loginUser(loginPayload);
        return res.status(200).json({
            success : true,
            message : "Login Successfull",
            data : response,
            error : {}
        })
    }catch(error){
        return res.status(500).json({
            success : false,
            message : error.message,
            error : error,
            data : {}
        })
    }

}

module.exports = {
    logIn
}