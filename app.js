// // app.get("/", function (req, res) {
// // 	// let currentDate = today.getDate();
// // 	// console.log(currentDate);
// // 	// let day = "";
// // 	// const dayNames = [
// // 	// 	"Sunday",
// // 	// 	"Monday",
// // 	// 	"Tuesday",
// // 	// 	"Wednesday",
// // 	// 	"Thursday",
// // 	// 	"Friday",
// // 	// 	"Saturday",
// // 	// ];
// // 	// const dayIndex = today.getDay();

// // 	// Format of date

// // 	let options = {
// // 		weekday: "long",
// // 		year: "numeric",
// // 		month: "long",
// // 		day: "numeric",
// // 	};

// // 	let today = new Date();

// // 	// if (currentDate === 6 || currentDate === 0) {
// // 	// 	day = dayNames[dayIndex];
// // 	// 	console.log(day);
// // 	// } else {
// // 	// 	day = dayNames[dayIndex];
// // 	// }

// // 	let day = "";
// // 	day = today.toLocaleDateString("en-US", options);

// // 	res.render("list", { kindOfDay: day });
// // });

// const express = require("express");
// const bodyParser = require("body-parser");
// // const date = require(__dirname + "/date.js");
// const mongoose = require("mongoose");
// const { name } = require("ejs");
// const _ = require("lodash");
// // console.log(date());
// // let items = ["Buy food", "Cook food", "Eat food"];
// // let workItems = [
// // 	"Check emails",
// // 	"Attend daily stand-up meeting",
// // 	"Finish UI design for project X",
// // 	// "Code review for team submissions",
// // 	// "Write documentation for API endpoints",
// // 	// "Test new feature implementation",
// // 	// "Prepare presentation for client meeting",
// // ];

// // using mongoose to assign the new task (strings )

// // const Item = mongoose.model("Item", itemSchema)
// // const item = new mongoose.Schema({
// // 	name: String,
// // });

// const app = express();
// app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

// mongoose.connect("mongodb://127.0.0.1:27017/newDB6225");
// // .then((result) => {
// // 	console.log(
// // 		"Connected Successfully  to the live db server running locally!:",
// // 		result
// // 	);
// // })
// // .catch((error) => {
// // 	console.error("error connecting to sever!!", error);
// // });

// // below is the schema
// const itemsSchema = {
// 	name: String,
// };
// // now create a mongoose model

// const Item = mongoose.model("Item", itemsSchema);

// const item1 = new Item({
// 	name: "Buy rope",
// });

// const item2 = new Item({
// 	name: "study for neet in kota",
// });

// const item3 = new Item({
// 	name: "do group suicide/study ",
// });

// const defaultItems = [item1, item2, item3];

// const listSchema = {
// 	name: String,
// 	items: [itemsSchema],
// };

// const List = mongoose.model("List", listSchema);

// // Item.insertMany(defaultItems)
// // 	.then((result) => {
// // 		console.log("Document inserted successfully:", result);
// // 	})
// // 	.catch((error) => {
// // 		console.error("Error deleting document:", error);
// // 	});

// // let us create a new list const here
// // const items = Item.find({})
// // 	.then((result) => {
// // 		console.log("Iterated inside the object?", result);
// // 	})
// // 	.catch((error) => {
// // 		console.error("Error deleting document:", error);
// // 	});

// app.get("/", function (req, res) {
// 	// let options = {
// 	// 	weekday: "long",
// 	// 	month: "long",
// 	// 	day: "numeric",
// 	// };

// 	// let today = new Date();

// 	// let day = date.getDay();

// 	// day = today.toLocaleDateString("en-US", options);

// 	const items = Item.find({})
// 		.then((result) => {
// 			if (result == 0) {
// 				// console.log("I have zero item inside!", result);

// 				Item.insertMany(defaultItems)
// 					.then((result) => {
// 						console.log("Document inserted successfully:", result);
// 					})
// 					.catch((error) => {
// 						console.error("Error deleting document:", error);
// 					});
// 				res.render("/");
// 			} else {
// 				// console.log("Iterated inside the object?", result);
// 				res.render("list", { listTitle: "Today", newListItem: result });
// 			}
// 		})
// 		.catch((error) => {
// 			console.error("Error deleting document:", error);
// 		});

// 	// res.render("list", { listTitle: "Today", newListItem: items });
// 	// res.render("list", { listTitle: "Today", newListItem: "x" });
// });
// app.post("/", function (req, res) {
// 	let itemName = req.body.newItem;
// 	// console.log(req.body.list);
// 	const listName = req.body.list;
// 	// if (req.body.list === "Work") {
// 	// 	workItems.push(item);
// 	// 	res.redirect("/work");
// 	// } else {
// 	// 	items.push(item);
// 	// 	res.redirect("/");
// 	// }
// 	const item = new Item({
// 		name: itemName,
// 	});

// 	if (listName === "Today") {
// 		item.save();
// 		res.redirect("/");
// 	} else {
// 		List.findOne({
// 			name: listName,
// 		})
// 			.then((result) => {
// 				result.items.push(item);
// 				result.save();
// 				res.redirect("/" + listName);
// 			})
// 			.catch((error) => {
// 				console.error("Error deleting document:", error);
// 			});
// 	}
// });

// app.post("/delete", function (req, res) {
// 	// console.log(req.body.checkbox);
// 	const checkedItem = req.body.checkbox;
// 	const listName = req.body.listName;

// 	// console.log(checkedItem);

// 	if (listName == "Today") {
// 		// Item.findByIdAndRemove(checkedItem)
// 		// 	.then((result) => {
// 		// 		console.log("Iterated inside the object?", result);
// 		// 	})
// 		// 	.catch((error) => {
// 		// 		console.error("Error deleting document:", error);
// 		// 	});

// 		Item.findByIdAndDelete(checkedItem)
// 			.then((deletedDoc) => {
// 				if (deletedDoc) {
// 					console.log("Successfully deleted checked Item:", deletedDoc);
// 					res.redirect("/");
// 				} else {
// 					console.log("No document found");
// 				}
// 			})
// 			.catch((err) => console.error("Error deleting:", err));
// 	} else {
// 		// List.findOneAndUpdate({name: listName} , {$pull: {items : {_id : checkedItem}}}, callbackhere)
// 		// List.findOneAndUpdate(
// 		// 	{ name: listName },
// 		// 	{ $pull: { items: { _id: checkedItem } } },
// 		// 	function (err, foundList) {
// 		// 		if (!err) {
// 		// 			res.redirect("/" + listName);
// 		// 		}
// 		// 	}
// 		// );

// 		// Model.findOneAndUpdate(
// 		// 	{ name: listName },
// 		// 	{ $pull: { items: { _id: checkedItem } } }
// 		// )
// 		// 	.then((updatedDoc) => {
// 		// 		if (updatedDoc) {
// 		// 			console.log("Updated:", updatedDoc);
// 		// 		} else {
// 		// 			console.log("No document found");
// 		// 		}
// 		// 	})
// 		// 	.catch((err) => console.error("Error updating:", err));

// 		List.findOneAndUpdate(
// 			{ name: listName },
// 			{ $pull: { items: { _id: checkedItem } } }
// 		)
// 			.then(() => {
// 				res.redirect("/" + listName);
// 			})
// 			.catch((err) => {
// 				console.error("Error updating list:", err);
// 			});
// 	}

// 	// Item.deleteOne({ _id: checkedItem })
// 	// 	.then((result) => {
// 	// 		console.log("Document deleted:", result);
// 	// 	})
// 	// 	.catch((error) => {
// 	// 		console.error("Error deleting document:", error);
// 	// 	});
// 	// res.redirect("/");
// });

// // app.get("/work", function (req, res) {
// // 	res.render("list", {
// // 		listTitle: "Work",
// // 		newListItem: workItems,
// // 	});
// // });

// // app.get("/:customList", function (req, res) {
// // 	// console.log(req.params.topic);
// // 	// composedStrings.forEach(function (item, index) {
// // 	// 	if (_.lowerCase(item.title) === _.lowerCase(req.params.topic)) {
// // 	// 		res.render("post", { title: item.title, content: item.content });
// // 	// 		console.log(`Match found!`);
// // 	// 	}
// // 	// });
// // 	res.render("list" , {
// // 		listTitle: "customList",
// // 		// newListItem: workItems,
// // 	});
// // });
// app.get("/:CustomListName", function (req, res) {
// 	// const customListName = req.params.CustomListName;
// 	const customListName = _.capitalize(req.params.CustomListName);

// 	List.findOne({ name: customListName })
// 		.then((result) => {
// 			if (result) {
// 				console.log("Exists bro!");
// 				res.render("list", {
// 					listTitle: result.name,
// 					newListItem: result.items,
// 				});
// 			} else {
// 				console.log("Dose not exists akka!");
// 				const list = new List({
// 					name: customListName,
// 					items: defaultItems,
// 				});

// 				list.save();
// 				res.redirect("/" + customListName);
// 			}
// 		})
// 		.catch((error) => {
// 			console.error("Error performing operation:", error);
// 		});
// });

// app.get("/about", function (req, res) {
// 	res.render("about");
// });

// app.listen(4000, function () {
// 	console.log("Server started on port 4000");
// });

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { name } = require("ejs");
const _ = require("lodash");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// mongoose.connect("mongodb://127.0.0.1:27017/newDB6225");
// mongoose.connect(
// 	// "mongodb+srv://admin-angela:Password@123@cluster0.sj7ho.mongodb.net/newDB6225"
// 	"mongodb+srv://admin-angela:Password@123@cluster0.sj7ho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// );

mongoose
	.connect(
		"mongodb+srv://admin-angela:Password%40123@cluster0.sj7ho.mongodb.net/newDB6225?retryWrites=true&w=majority"
	)
	.then(() => console.log("MongoDB Connected!"))
	.catch((err) => console.error("Connection Error:", err));

const itemsSchema = {
	name: String,
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
	name: "Buy rope",
});

const item2 = new Item({
	name: "study for NEET in Kota",
});

const item3 = new Item({
	name: "do group suicide/study ",
});

const defaultItems = [item1, item2, item3];

const listSchema = {
	name: String,
	items: [itemsSchema],
};

const List = mongoose.model("List", listSchema);

app.get("/", function (req, res) {
	const items = Item.find({})
		.then((result) => {
			if (result == 0) {
				// console.log("I have zero item inside!", result);
				Item.insertMany(defaultItems)
					.then((result) => {
						// console.log("Document inserted successfully:", result);
					})
					.catch((error) => {
						console.error("Error inserting  document:", error);
					});
				res.render("/");
			} else {
				// console.log("Iterated inside the object?", result);
				res.render("list", { listTitle: "Today", newListItem: result });
			}
		})
		.catch((error) => {
			console.error("Error deleting document:", error);
		});
});

app.post("/", function (req, res) {
	let itemName = req.body.newItem;
	const listName = req.body.list;
	const item = new Item({
		name: itemName,
	});

	if (listName === "Today") {
		item.save();
		res.redirect("/");
	} else {
		List.findOne({ name: listName })
			.then((result) => {
				result.items.push(item);
				result.save();
				res.redirect("/" + listName);
			})
			.catch((error) => {
				console.error("Error deleting document:", error);
			});
	}
});

app.post("/delete", function (req, res) {
	const checkedItem = req.body.checkbox;
	const listName = req.body.listName;

	if (listName == "Today") {
		Item.findByIdAndDelete(checkedItem)
			.then((deletedDoc) => {
				if (deletedDoc) {
					// console.log("Successfully deleted checked Item:", deletedDoc);
					res.redirect("/");
				} else {
					console.log("No document found");
				}
			})
			.catch((err) => console.error("Error deleting:", err));
	} else {
		List.findOneAndUpdate(
			{ name: listName },
			{ $pull: { items: { _id: checkedItem } } }
		)
			.then(() => {
				res.redirect("/" + listName);
			})
			.catch((err) => {
				console.error("Error updating list:", err);
			});
	}
});

app.get("/:CustomListName", function (req, res) {
	const customListName = _.capitalize(req.params.CustomListName);

	List.findOne({ name: customListName })
		.then((result) => {
			if (result) {
				// console.log("Exists bro!");
				res.render("list", {
					listTitle: result.name,
					newListItem: result.items,
				});
			} else {
				// console.log("Dose not exists akka!");
				const list = new List({
					name: customListName,
					items: defaultItems,
				});

				list.save();
				res.redirect("/" + customListName);
			}
		})
		.catch((error) => {
			console.error("Error performing operation:", error);
		});
});

app.get("/page/about", function (req, res) {
	res.render("about");
});

app.listen(4000, function () {
	console.log("Server started on port 4000");
});
