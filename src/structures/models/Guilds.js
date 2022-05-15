const mongo = require('mongoose');

const Schema = mongo.Schema;

const Guild = new Schema({
	_id: String,
	name: String,
	icon: String,
	bio: String,
	verified: Boolean,
	config: {
		welcome: {
			channel: String,
			message: String
		},
		bye: {
			channel: String,
			message: String
		},
		system: {
			antispam: {
				config: {
					blacklist: Array
				},
				check: {
					default: false,
					type: Boolean,
					required: true
				}
			},
			antilink: {
				default: false,
				type: Boolean,
				required: true
			}
		}
	}
})
module.exports = new mongo.model("Guilds", Guild)
