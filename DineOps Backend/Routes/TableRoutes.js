const express = require("express")
const { IsUserAuthorised } = require("../Middlewares/AuthorisedUser")
const { AddTable, GetTables, UpdateTable } = require("../Controllers/TableController")

const router = express.Router()


router.post("/",IsUserAuthorised,AddTable);
router.get("/",IsUserAuthorised,GetTables)
app.put("/:id",IsUserAuthorised,UpdateTable)

module.exports = router;