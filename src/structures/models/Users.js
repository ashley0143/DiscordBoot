const mongo = require('mongoose');

const Schema = mongo.Schema;

const User = new Schema({
	_id: String,
	about: String,
	economy: {
		coins: Number,
	},
	lang: { type: String, default: "pt-br", required: true }
});


module.exports = new mongo.model("Users", User)
