const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/UserModel");
const config = require("../Configs/Config")

async function IsUserAuthorised(req,res,next){
    try{

        const accessToken = req.cookies.accessToken;

        if(!accessToken){
            return next(createHttpError(400,{message:"User is not authorised"}))
        }

        const decodedToken = jwt.verify(accessToken,config.accessTokenSecret )

        if(!decodedToken){
            return next(createHttpError(400,{message:"User is not authorised"}))
        }

        const loggedinUser = await UserModel.findById({_id:decodedToken._id})

        if(!loggedinUser){
            return next(createHttpError(400,{message:"User not found"}))
        }

        req.user = loggedinUser;

        next();


    }catch(error){
        return next(error)
    }
}

module.exports = {IsUserAuthorised}