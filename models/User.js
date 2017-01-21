// http://mongoosejs.com/docs/api.html#index_Mongoose-model
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
	verificationTokenExpiryDate: Date,
	subscribedProducts: [String],
	subscribedCategories: [String]
});
// userSchema.set('collection', 'users');
userSchema.plugin(timestamps);

module.exports = mongoose.model('User', !mongoose.models.User ? userSchema : null);
