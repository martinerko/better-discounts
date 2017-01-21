const express = require('express');
const authMiddleware = require('../middlewares/auth');
const User = require('../models/User');
const router = express.Router();

router.post('/subscribe-by-product', authMiddleware, (req, res) => {
	let {code = ''} = (req.body || {});

	if (typeof code !== 'string') {
		return res.status(422).json({
			message: 'Incorrect product code'
		});
	}

	// TODO check if product exists

	User.findOneAndUpdate({
		_id: req.currentUser._id
	}, {
		$addToSet: {
			subscribedProducts: [code]
		}
	}, function(err, doc) {
		if (err) {
			throw err;
		}
		return res.status(200).json({
			code
		});
	});
});

router.post('/unsubscribe-by-product', authMiddleware, (req, res) => {
	let {code = ''} = (req.body || {});

	if (typeof code !== 'string') {
		return res.status(422).json({
			message: 'Incorrect product code'
		});
	}

	// TODO check if product exists

	User.findOneAndUpdate({
		_id: req.currentUser._id
	}, {
		$pull: {
			subscribedProducts: code
		}
	}, function(err, doc) {
		if (err) {
			throw err;
		}
		return res.status(200).json({
			code
		});
	});
});

router.get('/all', authMiddleware, (req, res) => {
	User
		.findOne({
			_id: req.currentUser._id
		})
		.select({
			_id: 0,
			subscribedProducts: 1,
			subscribedCategories: 1
		})
		.exec((err, user) => {
			if (err) {
				throw err;
			}

			return res.status(200).json(user);
		});
});

module.exports = router;
