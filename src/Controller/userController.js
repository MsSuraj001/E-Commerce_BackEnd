
const { registerUser, registerUserAddress, userDetails, fetchAddressCart } = require("../Service/userService")

async function userCreate(req, res){
    // console.log(req.body);
    try{
        const response = await registerUser({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            password : req.body.password,
            age : req.body.age,
            role : req.body.role,
            mobileNumber : req.body.mobileNumber,
            gender : req.body.gender,
            image : req.file?.path
        });
        // console.log(response);
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

async function addUserAddress(req, res){
    console.log(req.body);
    try{
        const response = await registerUserAddress({
            userId : req.user.id,
            fullName : req.body.fullName,
            mobileNumber : req.body.mobileNumber,
            state : req.body.state,
            city : req.body.city,
            pinCode : req.body.pinCode,
            landMark : req.body.landMark,
            roadName : req.body.roadName,
        })
        return res.status(201).json({
            success : true,
            data : response,
            message : "User Address Created Successfully",
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

async function getUserDetails(req, res){
    try{
        const response = await userDetails(req.user.id)
        return res.status(200).json({
            success : true,
            message : "Successfully get the user Details",
            data : response,
            error : {}
        })
    }catch(error){
        return res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message,
            data : {}
        })
    }
}

async function getAllAddress(req, res){
    console.log(req.user.id);
    
    try{
        const response = await fetchAddressCart(req.user.id)
        return res.status(200).json({
            success : true,
            message : "Successfully fetch the all address",
            data : response,
            error : {}
        })
    }catch(error){
        return res.status(500).json({
            success : false,
            message : "Internal server error",
            error : error.message,
            data : {}
        })
    }
}

module.exports = {
    userCreate,
    addUserAddress,
    getUserDetails,
    getAllAddress
}