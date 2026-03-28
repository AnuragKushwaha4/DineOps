const config = require("../Configs/Config")

function GlobalErrorHandler(err,req,res,next){
    const status = err.status || 500

    return res.status(status).json({
        status : status,
        message : err.message,
        errorStack : config.nodeEnv==="development" ? err.errorStack :""
    })
}

module.exports = GlobalErrorHandler;