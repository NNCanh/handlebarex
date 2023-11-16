const express = require("express")
const router = express.Router()

router.get("/", require("../controllers/task3Controller").show)

module.exports = router
