const mongoose = require("mongoose")

const TableSchema = new mongoose.Schema({
    tableNo:{type:Number, required:true, unique:true},
    tableStatus:{type:String,default:"Available"},
    orderDetails:{type:mongoose.Schema.Types.ObjectId,ref:"Orders"}

})

module.exports = mongoose.model("Tables",TableSchema)