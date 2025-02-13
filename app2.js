const express = require("express");
const bodyParser = require("body-parser");

let items = ["Buy Cigarette", "Buy Grapes Juices", "Buy Water"];

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
	let options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	let today = new Date();

	let day = "";

	day = today.toLocaleDateString("en-US", options);

	res.render("list", { kindOfDay: day, newListItem: items });
});
app.post("/", function (req, res) {
	let item = req.body.newItem;
	items.push(item);
	res.redirect("/");
});
app.listen(3000, function () {
	console.log("Server has started on the port 3000");
});
