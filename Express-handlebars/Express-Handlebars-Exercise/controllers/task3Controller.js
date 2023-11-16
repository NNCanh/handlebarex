const controller = {}

controller.show = (req, res) => {
	const {products, categories} = require("../data")
	const productList = req.query.category
		? products.filter((item) => item.category == req.query.category)
		: products
	res.render("task3", {
		products: productList,
		categories,
		active: {task3: true},
	})
}

module.exports = controller
