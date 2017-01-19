const validateSignupData = require('../shared/validations/signup');
const validateSigninData = require('../shared/validations/signin');
const validateChangePasswordData = require('../shared/validations/changePassword');
const authMiddleware = require('../middlewares/auth');
const bcrypt = require('bcrypt');
const express = require('express');
// const expressJwt = require('express-jwt');
const User = require('../models/User');
const {isUserUnique, generateJwtToken} = require('../utils/auth');

const SALT_ROUND = 10;
// const utils = require('../utils/index');
// const email = require('../utils/email');
const router = express.Router();

router.post('/signin', (req, res) => {
	let {email = '', password = ''} = (req.body.data || {});
	email = email.trim();
	password = password.trim();

	// check if signin form is valid
	const {isValid, errors} = validateSigninData({
		email,
		password
	});

	if (!isValid) {
		return res.status(422).json({
			validation: errors
		});
	}

	User
		.findOne({
			email
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
					message: 'Incorrect credentials.',
					validation: true // make sure this error will be displayed in the form
				});
			}

			bcrypt.compare(password, user.get('password'), (err, valid) => {
				if (err) {
					throw err;
				}

				if (!valid) {
					return res.status(401).json({
						message: 'Incorrect credentials.',
						validation: true // make sure this error will be displayed in the form
					});
				}

				const token = generateJwtToken(user);

				return res.status(200).json({
					token,
					user: {
						admin: user.get('admin'),
						email: user.get('email'),
						name: user.get('name')
					}
				});
			});
		});
});

router.post('/signup', (req, res) => {
	let {name = '', email = '', password = '', password2 = ''} = (req.body.data || {});

	const user = {
		name: name.trim(),
		email: email.trim(),
		password: password.trim(),
		password2: password2.trim()
	};

	// check if user form is valid
	const {isValid, errors} = validateSignupData(user);

	if (!isValid) {
		return res.status(422).json({
			validation: errors
		});
	}

	// check if user with given email address is not registered
	isUserUnique({
		email
	}, (err) => {
		if (err) {
			return res.status(422).json({
				message: err.message,
				validation: true // make sure this error will be displayed in the form
			});
		}

		const passwordDigest = bcrypt.hashSync(password.trim(), SALT_ROUND);
		const user = new User({
			admin: false,
			name: name.trim(),
			email: email.trim(),
			password: passwordDigest
		});

		user.save((err, user) => {
			if (err) {
				throw err;
			}

			const token = generateJwtToken(user);

			return res.status(200).json({
				token,
				user: {
					admin: user.get('admin'),
					email: user.get('email'),
					name: user.get('name')
				}
			});
		});
	});
});

router.post('/change-password', authMiddleware, (req, res) => {
	let {currentPassword = '', newPassword = '', newPassword2} = (req.body.data || {});

	const passwords = {
		currentPassword: currentPassword.trim(),
		newPassword: newPassword.trim(),
		newPassword2: newPassword2.trim()
	};

	// check if signin form is valid
	const {isValid, errors} = validateChangePasswordData(passwords);

	if (!isValid) {
		return res.status(422).json({
			validation: errors
		});
	}

	User
		.findOne({
			_id: req.currentUser._id
		})
		.select({
			_id: 1,
			password: 1
		})
		.exec((err, user) => {
			if (err) {
				throw err;
			}

			// we don't have to do verification whether user exists, since we are behind auth. middleware

			// compare received password and original password in the db
			bcrypt.compare(passwords.currentPassword, user.get('password'), (err, valid) => {
				if (err) {
					throw err;
				}

				if (!valid) {
					return res.status(403).json({
						message: 'Your old password is incorrect.',
						validation: true // make sure this error will be displayed in the form
					});
				}

				const newPasswordDigest = bcrypt.hashSync(newPassword, SALT_ROUND);
				User.findOneAndUpdate({
					_id: req.currentUser._id
				}, {
					password: newPasswordDigest
				}, function(err, doc) {
					if (err) {
						throw err;
					}
					return res.status(200).json({});
				});
			});
		});
});

// 	user.save((err, user) => {
// 		if (err) {
// 			throw err;
// 		}
// 		// email.sendWelcomeEmail(user, req.headers.host); //send welcome email w/ verification token
//
// 		// const token = utils.generateToken(user);
//
// 		//	user = utils.getCleanUser(user);
//
// 		res.json({
// 			user: user
// 		// token: token
// 		});
// 	});

module.exports = router;
