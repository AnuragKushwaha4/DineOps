const Razorpay = require("razorpay")
const config = require("../Configs/Config")
async function createOrder(req,res,next){
    try{
        var instance = new Razorpay({ key_id: config.testapikey , key_secret: config.testsecretkey })

        const {amount} = req.body;

        var options = {
            amount: amount*100,  
            currency: "INR",
            receipt: `receipt_${Date.now()}`
        };

        const order = await instance.orders.create(options);

        res.status(200).json({success:true,order})


    }catch(error){
        next(error)
    }
}

module.exports = {createOrder}