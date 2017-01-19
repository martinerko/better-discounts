const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	admin: {
		type: Boolean,
		default: false
	},
	verified: {
		type: Boolean,
		default: false
	},
	verificationToken: String,
	verificationTokenExpiryDate: Date
});

userSchema.plugin(timestamps);

module.exports = mongoose.model('User', !mongoose.models.User ? userSchema : null);
