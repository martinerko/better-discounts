const validator = require('validator');
const isEmpty = require('lodash.isempty');

module.exports = function validateData({email = '', password = ''}) {
	let errors = {};

	if (!validator.isEmail(email)) {
		errors.email = 'Enter valid email address';
	}

	if (validator.isEmpty(password)) {
		errors.password = 'This field is required';
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
