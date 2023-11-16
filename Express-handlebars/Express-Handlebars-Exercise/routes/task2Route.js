const express = require("express")
const router = express.Router()

router.get("/", require("../controllers/task2Controller").show)

module.exports = router
