const mongoose = require("mongoose")

const TableSchema = new mongoose.Schema({
    tableNo:{type:Number, required:true, unique:true},
    tableStatus:{type:String,default:"Available"},
    seats:{type:Number, required:true},
    tableName:{type:String, required:true},
    orderDetails:{type:mongoose.Schema.Types.ObjectId,ref:"Orders"}

})

module.exports = mongoose.model("Tables",TableSchema)