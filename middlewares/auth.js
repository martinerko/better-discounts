const jwt = require('jsonwebtoken');
const User = require('../models/user');
const JWT_SECRET = process.env.JWT_SECRET || require('../config').jwt.SECRET;

module.exports = function(req, res, next) {
	const authorizationHeader = req.headers['authorization'];
	let token;

	if (authorizationHeader) {
		token = authorizationHeader.replace(/^Bearer /, '');
	}

	if (token) {
		jwt.verify(token, JWT_SECRET, (err, {_id}) => {
			if (err) {
				res.status(401).json({
					error: 'Failed to authenticate.'
				});
			} else {
				User
					.findOne({
						_id
					})
					.select({
						_id: 1,
						name: 1,
						email: 1,
						admin: 1,
						verified: 1
					})
					.exec((err, user) => {
						if (err) {
							throw err;
						}

						if (!user) {
							return res.status(401).json({
								message: 'Incorrect credentials.'
							});
						}
						req.currentUser = user.toJSON();
						next();
					});
			}
		});
	} else {
		res.status(403).json({
			error: 'No token provided'
		});
	}
};
