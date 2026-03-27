require("dotenv").config();


const express = require("express")
const ConnectDB = require("./Configs/Connection")




const app = express()

ConnectDB()
const PORT = process.env.PORT;

app.get("/",(req,res)=>{
    res.json({message:"server stared"})
})






app.listen(PORT,()=>{
    console.log(`Started Server :${PORT} `)
})