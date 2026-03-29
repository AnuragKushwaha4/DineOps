const usermodel = require("../Models/UserModel")
const createHttpError = require("http-errors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require("../Configs/Config")

async function Register(req,res,next){
    try{

        const {name,email,password,phone,role} = req.body

        if(!name || !email || !password || !phone || !role){
            return next(createHttpError(400,"All fields are required"))
        }

        const isuserPresent = await usermodel.findOne({email})

        if(isuserPresent){
            return next(createHttpError(400,"User already present"))
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        let newUser = await usermodel.create({
            name,
            email,
            phone,
            role,
            password:hashedPassword
        })

        return res.status(201).json({
            success:true,
            message:"New User created",
            data:newUser
        })

    }
    catch(error){
       return next(error)
    }
}




async function Login(req,res,next){
    try{
        const {email,password}= req.body;

        const isUserPresent = await usermodel.findOne({email:email})

        if(!isUserPresent){
            return next(createHttpError(400,"Invalid email or password"));
        }

        const isValid =await bcrypt.compare(password,isUserPresent.password);
        if(!isValid){
            return next(createHttpError(400,"Invalid email or password"));
        }
        const accessToken = jwt.sign({_id:isUserPresent._id},config.accessTokenSecret,{
            expiresIn:'2d'
        })

        res.cookie("accessToken",accessToken,{
             httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            success:true,
            message:"Logged In",
            data:isUserPresent
        })
    }
    catch(error){
       return next(error)
    }



async function GetUserData(req,res,next){
    try{
        const user = await usermodel.findById({_id:req.user._id})
        return res.status(200).json({success:true,message:"User found",data:user})
    }
    catch(error){
        return next(error)
    }

}


}

module.exports ={Register,Login,GetUserData}