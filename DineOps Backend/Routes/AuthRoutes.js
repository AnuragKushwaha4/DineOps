const express = require("express")
const { Register, Login, GetUserData, Logout } = require("../Controllers/AuthController")
const { IsUserAuthorised } = require("../Middlewares/AuthorisedUser")



const router = express.Router()

router.post("/register",Register)
router.post("/login",Login)
router.get("/",IsUserAuthorised,GetUserData)
router.post("/logout",IsUserAuthorised,Logout)

module.exports = router