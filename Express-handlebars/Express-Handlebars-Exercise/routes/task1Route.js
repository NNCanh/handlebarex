const express = require("express")
const router = express.Router()

router.get("/", require("../controllers/task1Controller").show)

module.exports = router
