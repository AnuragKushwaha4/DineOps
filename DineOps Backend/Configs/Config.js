require("dotenv").config()


const config = Object.freeze({
    port : process.env.PORT || 3000,
    DBURL :process.env.MONGODB_URL,
    nodeEnv : process.env.NODE_ENV || "developement",
    accessTokenSecret:process.env.JWT_SECRET,
    testapikey : process.env.TEST_API_KEY,
    testsecretkey : process.env.TEST_KEY_SECRET
})

module.exports = config