const usermodel = require("../Models/UserModel")
const createHttpError = require("http-errors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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

        res.status(201).json({
            success:true,
            message:"New User created",
            data:newUser
        })

    }
    catch(error){
        next(error)
    }
}

async function Login(req,res,next){
    const {email,password} = req.body;

    
}

module.exports ={Register,Login}