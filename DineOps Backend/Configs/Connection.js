const mongoose = require("mongoose")
const config = require("./Config")


async function ConnectDB(){
    try{
        const connections = await mongoose.connect(config.DBURL)
        console.log(`MongoDB connected : ${connections.connection.host}`);


    }
    catch{
        console.log(`Error : ${Error}`);
        process.exit();
    }
}

module.exports = ConnectDB;