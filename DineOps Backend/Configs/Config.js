require("dotenv").config()


const config = Object.freeze({
    port : process.env.PORT || 3000,
    DBURL :process.env.MONGODB_URL,
    nodeEnv : process.env.NODE_ENV || "developement"

})

module.exports = config