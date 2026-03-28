const config = require("./Configs/Config")


const express = require("express")
const ConnectDB = require("./Configs/Connection")
const GlobalErrorHandler = require("./Middlewares/ErrorHandler")




const app = express()

ConnectDB()
const PORT = config.port;

app.get("/",(req,res)=>{
    res.json({message:"server stared"})
})


// Error handler :
app.use(GlobalErrorHandler)






app.listen(PORT,()=>{
    console.log(`Started Server :${PORT} `)
})