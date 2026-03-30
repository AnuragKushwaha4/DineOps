const express = require("express")
const { IsUserAuthorised } = require("../Middlewares/AuthorisedUser")
const { addOrder, getOrders, getOrderByID, UpdateOrder } = require("../Controllers/OrderController")

const router = express.Router()


router.post("/",IsUserAuthorised,addOrder)
router.get("/",IsUserAuthorised,getOrders)
router.get("/:id",IsUserAuthorised,getOrderByID)
router.put("/:id",IsUserAuthorised,UpdateOrder)


module.exports=router