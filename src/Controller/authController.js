const { loginUser } = require("../Service/authService")


async function logIn(req, res){
    try{
        const loginPayload = req.body
        const response =await loginUser(loginPayload);
        res.cookie("authToken", response, {
            httpOnly : true,
            secure : false,
            maxAge : 7 * 24 * 60 * 60 * 100
        })
        return res.status(200).json({
            success : true,
            message : "Login Successfull",
            data : {},
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