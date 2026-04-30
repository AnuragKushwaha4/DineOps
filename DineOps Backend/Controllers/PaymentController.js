const Razorpay = require("razorpay")
const config = require("../Configs/Config")
const crypto = require("crypto")
const PaymentModel = require("../Models/PaymentModel")

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


async function verifyPayment(req, res, next) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    } = req.body;

    
    const body = razorpay_order_id + "|" + razorpay_payment_id;

   
    const expectedSignature = crypto
      .createHmac("sha256", config.testsecretkey)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature === razorpay_signature) {
      return res.status(200).json({
        success: true,
        message: "Payment verified successfully"
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid payment signature"
      });
    }

  } catch (error) {
    next(error);
  }
}



async function updatePaymentRecord(req,res,next){
  try {
    const {paymentId,orderId,amount,currency,status,method,contact} = req.body;
    const newPayment = await PaymentModel.create({paymentId,orderId,amount,currency,status,method,contact,createdAt:new Date()})
    res.status(200).json({success:true,data:newPayment})
  } catch (error) {
    next(error)
  }
}
module.exports = {createOrder,verifyPayment,updatePaymentRecord}