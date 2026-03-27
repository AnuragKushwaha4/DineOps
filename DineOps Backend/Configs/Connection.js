const mongoose = require("mongoose")
require("dotenv").config()


async function ConnectDB(){
    try{
        const connections = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDB connected : ${connections.connection.host}`);

        
    }
    catch{
        console.log(`Error : ${Error}`);
        process.exit();
    }
}


module.exports = ConnectDB;