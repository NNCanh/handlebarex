const express = require("express")
const app = express()
const port = 4000 || process.env.PORT
const expressHBs = require("express-handlebars")

//tra ve web tinh
app.use(express.static(__dirname + "/html"))

//su dung view tamplate
app.engine(
	"hbs",
	expressHBs.engine({
		layoutsDir: __dirname + "/views/layouts",
		partialsDir: __dirname + "/views/partials",
		extname: "hbs",
		defaultLayout: "layout",
	})
)
app.set("view engine", "hbs")

app.get("/", (req, res) => {
	res.render("index", {active: {home: true}})
})

app.use("/task1", require("./routes/task1Route"))

app.use("/task2", require("./routes/task2Route"))

app.use("/task3", require("./routes/task3Route"))

app.use("/task4", require("./routes/task4Route"))

app.get("/admin", (req, res) => res.render("index", {layout: "admin"}))

app.listen(port, () => console.log(`Example app listening on port ${port}...`))
