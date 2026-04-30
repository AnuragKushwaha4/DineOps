const express = require("express")
const { IsUserAuthorised } = require("../Middlewares/AuthorisedUser")
const {createOrder, verifyPayment, updatePaymentRecord}=require("../Controllers/PaymentController")

const router = express.Router();

router.post("/createOrder",IsUserAuthorised,createOrder)
router.post("/verifyPayment",IsUserAuthorised,verifyPayment)
router.post("/updatePayment",IsUserAuthorised,updatePaymentRecord)

module.exports = router;