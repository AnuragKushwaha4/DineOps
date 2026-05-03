const createHttpError = require("http-errors");
const OrdersModel = require("../Models/OrdersModel");



async function addOrder(req,res,next){
    try{
        const {customerDetails,orderStatus,bills,items,table}=req.body;

        if(!customerDetails || !orderStatus || !bills || !items || !table){
            return next(createHttpError(400,"All feilds are required"))
        }

        const newOrder = await OrdersModel.create({customerDetails,orderStatus,bills,items,table});
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

        const data = await OrdersModel.find().populate("table");

        
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

        const {orderStatus} = req.body;

        if(!orderStatus){
            return next(createHttpError(400,"status not found"))
        }

        const updatedrecord = await OrdersModel.findOneAndUpdate(
            {_id:req.params.id},
            {orderStatus:orderStatus},
            {new:true}
        );

        if(!updatedrecord){
            return next(createHttpError(400,"Order Not found"))
        }

        res.status(200).json({
            success:true,
            message:"Order Updated",
            data:updatedrecord
        })

    }catch(error){
        next(error)
    }
}


module.exports = {addOrder,getOrders,getOrderByID,UpdateOrder}