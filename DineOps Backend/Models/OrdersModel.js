const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    customerDetails:{
        name : {type:String,required:true},
        phone : {type:String,required:true},
        guest : {type:Number,required:true}
    },
    orderStatus:{
        type:String,
        required:true
    },
    orderDate:{
        type:Date,
        default:Date.now
    },
    bills:{
        total:{type:Number,required:true},
        tax:{type:Number,required:true},
        totalwithTax:{type:Number,required:true}
    },
    items:[],
    table:{type:mongoose.Schema.Types.ObjectId,ref:"Tables"},
    paymentData:{
        razorpay_order_id:String,
        razorpay_payment_id:String
    }
},{timestamps:true})


module.exports = mongoose.model("Orders",OrderSchema)