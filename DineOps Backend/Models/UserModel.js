const mongoose = require("mongoose")

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate: [validator.isEmail, "Please enter a valid email"],
    },
    phone:{
        type:Number,
        required:true,
        validate: {
    validator: function(v) {
      return validator.isMobilePhone(v, "en-IN");
    },
    message: "Please enter a valid Indian phone number"
  }
    },
    role:{
        type:String,
        required:true
    }
},{timestamps:true})


module.exports = mongoose.Model("User",userSchema)