const pick = require('lodash.pick');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = process.env.JWT_SECRET || require('../config').jwt.SECRET;

function isUserUnique({email}, cb) {
	User.findOne({
		email
	}, (err = null, user) => {
		if (err) {
			throw err;
		}

		if (!user) {
			cb();
			return;
		}

		cb({
			'message': `Email address "${email}" is already registered.`
		});
	});
}

function generateJwtToken(data) {
	const user = pick(data, ['_id', 'name', 'email', 'admin']);
	return jwt.sign(user, JWT_SECRET);
}

module.exports = {
	isUserUnique: isUserUnique,
	generateJwtToken: generateJwtToken
};
