const Sequelize = require("sequelize"),
	db = new Sequelize(process.env.DATABASE_URL, { logging: false });

const Todo = db.define("todo", {
	task: {
		type: Sequelize.STRING,
		allowNull: false,
		defaultValue: ""
	}
});

Todo.sync({ force: true })	
.then(() => {
	return Promise.all([
		Todo.create({ task: "Buy apples" }),
		Todo.create({ task: "Clean bathroom" })
	])
})
.catch(err => {
	console.log(err);
});

module.exports = {
	db, 
	Todo
}

