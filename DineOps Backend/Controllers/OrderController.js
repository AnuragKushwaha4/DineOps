const createHttpError = require("http-errors");
const OrdersModel = require("../Models/OrdersModel");



async function addOrder(req,res,next){
    try{
        const {customerDetails,orderStatus,bills,items}=req.body;

        if(!customerDetails || !orderStatus || !bills || !items){
            return next(createHttpError(400,"All feilds are required"))
        }

        const newOrder = await OrdersModel.create({customerDetails,orderStatus,bills,items});
        return res.status(200).json({
            success:true,
            message:"new Order created",
            data:newOrder
        })

    }catch(error){
        next(error)
    }
}

async function getOrders(req,res,next){
    try{

        const data = await OrdersModel.find();


        return res.status(200).json({success:true,message:"Data sent",data:data})
    }catch(error){
        next(error)
    }
}

async function getOrderByID(req,res,next){
    try{

        const order = await OrdersModel.findById({_id:req.params.id})
        if(!order)return next(createHttpError(400,{message:"Order Not found"}))

        return res.status(200).json({success:true,message:"Data sent",data:order})

    }catch(error){
        next(error)
    }
}

async function UpdateOrder(req,res,next){
    try{

        const status = req.body;

        if(!status)next(createHttpError(400,{message:"status not found"}))
        
        const updatedrecord = await OrdersModel.findOneAndUpdate({_id:req.params.id},{status:status},{new:true})
        if(!updatedrecord)return next(createHttpError(400,{message:"Order Not found"}))
        updatedrecord.save()

        res.status(200).json({success:true,message:"Order Updated",data:updatedrecord})


    }catch(error){
        next(error)
    }
}


module.exports = {addOrder,getOrders,getOrderByID,UpdateOrder}