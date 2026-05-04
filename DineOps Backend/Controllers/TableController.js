const createHttpError = require("http-errors");
const TableModel = require("../Models/TableModel");


async function AddTable(req,res,next) {
    try{

        const {tableNo,seats,tableName}= req.body;

        if(!tableNo)return next(createHttpError(400,"Table number is not provided"))

        const isTablePresent = await TableModel.findOne({tableNo:tableNo})

        if(isTablePresent)return next(createHttpError(400,"Table Already Exist"))

        const NewTable = await TableModel.create({tableNo:tableNo,seats:seats,tableName:tableName})

        res.status(200).json({success:true,message:"New Table created",data:NewTable})

    }catch(error){
        next(error)
    }
}

async function GetTables(req,res,next) {
    try{

        const Tables = await TableModel.find();
        res.status(200).json({success:true,message:"All the Tables sent",data:Tables})
    }catch(error){
        next(error)
    }
}


async function UpdateTable(req,res,next) {
    try{

        const {tableStatus ,orderID}=req.body;
        if(!tableStatus || (tableStatus!="Available" && !orderID))return next(createHttpError(400,"All fields required"))

        const Table = await TableModel.findByIdAndUpdate(
            req.params.id,
            {tableStatus, orderDetails:orderID },
            {new:true}
        )

        if(!Table)return next(createHttpError(400,"Table not found"))

        res.status(200).json({success:true,message:"Table updated",data:Table})

        
    }catch(error){
        next(error)
    }
}


module.exports ={AddTable,GetTables,UpdateTable}