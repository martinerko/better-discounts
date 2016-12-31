const User = require('../models/User');

function isUserUnique(reqBody, cb) {
	const {username, email} = reqBody;

	User.findOne({
		$or: [{
			'username': new RegExp(`^${username.trim()}$`, 'i')
		}, {
			'email': new RegExp(`^${email.trim()}$`, 'i')
		}]
	}, (err = null, user) => {
		if (err) {
			throw err;
		}

		if (!user) {
			cb();
			return;
		}

		err = null;
		if (user.username === username) {
			err = {
				'username': `username "${username}" is already registered`
			};
		}
		if (user.email === email) {
			err = err || {};
			err = {
				'email': `email "${username}" is already registered`
			};
		}

		cb(err);
	});
}

module.exports = {
	isUserUnique: isUserUnique
};
