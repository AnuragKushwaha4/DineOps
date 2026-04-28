const config = require("./Configs/Config")
const cookieParser = require("cookie-parser")
const CORS = require("cors")
const express = require("express")
const ConnectDB = require("./Configs/Connection")
const GlobalErrorHandler = require("./Middlewares/ErrorHandler")





const AuthRoute = require("./Routes/AuthRoutes")
const OrderRoute = require("./Routes/OrderRoutes")
const TableRoute = require("./Routes/TableRoutes")
const PaymentRoute = require("./Routes/PaymentRoutes")


const app = express()

ConnectDB()
const PORT = config.port;


app.use(cookieParser())
app.use(express.json())
app.use(CORS({
    origin: "http://localhost:5173",
    credentials: true
}));


app.use("/api/auth",AuthRoute)
app.use("/api/order",OrderRoute)
app.use("/api/table",TableRoute)
app.use("/api/payment",PaymentRoute)


app.get("/",(req,res)=>{
    res.json({message:"server stared"})
})






// Error handler :
app.use(GlobalErrorHandler)






app.listen(PORT,()=>{
    console.log(`Started Server :${PORT} `)
})