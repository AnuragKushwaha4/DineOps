const mongoose = require("mongoose")

const PaymentSchema =new  mongoose.Schema({
    paymentId:String,
    orderId:String,
    amount:Number,
    currency:String,
    status:String,
    method:String,
    email:String,
    contact:String,
    createdAt:Date
})

module.exports = mongoose.model("Payment",PaymentSchema)