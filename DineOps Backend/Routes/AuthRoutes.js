const express = require("express")
const { Register, Login, GetUserData } = require("../Controllers/AuthController")
const { IsUserAuthorised } = require("../Middlewares/AuthorisedUser")



const router = express.Router()

router.post("/register",Register)
router.post("/login",Login)
router.get("/",IsUserAuthorised,GetUserData)

module.exports = router