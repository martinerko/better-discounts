const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = process.env.JWT_SECRET || require('../config').jwt.SECRET;

function isUserUnique({email}, cb) {
	User.findOne({
		'email': email.toLowerCase()
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

function generateJwtToken(user) {
	var u = {
		_id: user.get('_id').toString(),
		name: user.get('name'),
		email: user.get('email'),
		admin: user.get('admin')
	};

	return jwt.sign(u, JWT_SECRET);
}

module.exports = {
	isUserUnique: isUserUnique,
	generateJwtToken: generateJwtToken
};
