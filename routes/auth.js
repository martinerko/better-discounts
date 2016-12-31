const bcrypt = require('bcrypt');
const express = require('express');
//const expressJwt = require('express-jwt');
//const jwt = require('jsonwebtoken');
const User = require('../models/User');
const {isUserUnique} = require('../utils/auth');

const SALT_ROUND = 10;
//const utils = require('../utils/index');
//const email = require('../utils/email');
const router = express.Router();

router.get('/users', (req, res) => {
	if (!req.user || !req.user.admin) {
		return res.status(401).json({
			error: 'You are not authenticated to see this.'
		});
	}

	User
		.find({})
		.select({
			__v: 0,
			password: 0,
			updatedAt: 0,
			createdAt: 0
		})
		.sort({
			createdAt: -1
		})
		.exec((err, users) => {
			if (err) {
				console.log(err);
				return res.status(500).json({
					error: 'Could not retrieve users'
				});
			}
			res.json(users);
		});
});

router.post('/signup', function(req, res, next) {
	const body = req.body;

	// const errors = utils.validateSignUpForm(body);
	// if (errors) {
	// 	return res.status(403).json(errors);
	// }

	isUserUnique(body, function(err) {
		if (err) {
			return res.status(403).json(err);
		}

		const {name, email, username, password} = body;
		const hash = bcrypt.hashSync(password.trim(), SALT_ROUND);
		const user = new User({
			name: name.trim(),
			email: email.trim(),
			username: username.trim(),
			password: hash,
			admin: false,
			verified: false
		});

		user.save((err, user) => {
			if (err) {
				throw err;
			}
			// email.sendWelcomeEmail(user, req.headers.host); //send welcome email w/ verification token

			// const token = utils.generateToken(user);

			//	user = utils.getCleanUser(user);

			res.json({
				user: user
			// token: token
			});
		});
	});
});

module.exports = router;
