const controller = {}

const {zodiacs} = require("../data")

controller.show = (req, res) => {
	res.render("task4", {zodiacs, active: {task4: true}})
}

controller.showDetails = (req, res) => {
	const zodiac = zodiacs.filter((item) => item.name == req.params.name)[0]
	res.render("task4-details", {zodiac, active: {task4: true}})
}

module.exports = controller
