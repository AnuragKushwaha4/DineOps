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
    Items:[]
},{timestamps:true})


module.exports = mongoose.model("Orders",OrderSchema)