const express = require("express")
const { IsUserAuthorised } = require("../Middlewares/AuthorisedUser")
const {createOrder, verifyPayment}=require("../Controllers/PaymentController")

const router = express.Router();

router.post("/createOrder",IsUserAuthorised,createOrder)
router.post("/verifyPayment",IsUserAuthorised,verifyPayment)


module.exports = router;