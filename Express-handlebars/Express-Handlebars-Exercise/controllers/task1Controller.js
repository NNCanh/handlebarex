const controller = {}

controller.show = (req, res) => {
	const {emotions} = require("../data")
	res.render("task1", {emotions, active: {task1: true}})
}

module.exports = controller
