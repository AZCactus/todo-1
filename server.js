const express = require('express'),
	app = express(),
	path = require("path"),
	morgan = require("morgan"),
	db = require("./models"),
	bodyParser = require("body-parser"),
	Todo = db.Todo;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use("/vendor", express.static(path.join(__dirname, "/node_modules")));
app.use(morgan("dev"));

app.get("/todos", (req, res, next) => {
	Todo.findAll()
	.then( todos => {
    res.send(todos);
	})
	.catch(next);	
});

app.post("/todos", (req, res, next) => {
	Todo.create(req.body )	
	.then(todo => {
    res.send(todo);
	})	
	.catch(next);
});

const port = process.env.PORT || 3000;
app.listen(port, () =>{
	console.log(`server listening on port ${port}...`);
});
