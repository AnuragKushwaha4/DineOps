const express = require("express")
const { IsUserAuthorised } = require("../Middlewares/AuthorisedUser")
const {createOrder}=require("../Controllers/PaymentController")

const router = express.Router();

router.post("/createOrder",IsUserAuthorised,createOrder)



module.exports = router;