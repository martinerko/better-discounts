const validator = require('validator');
const isEmpty = require('lodash.isempty');

module.exports = function validateData({name = '', email = '', password = '', password2 = ''}) {
	let errors = {};

	if (!validator.isEmail(email)) {
		errors.email = 'Enter valid email address';
	}

	if (validator.isEmpty(name)) {
		errors.name = 'This field is required';
	}

	if (validator.isEmpty(password)) {
		errors.password = 'This field is required';
	}

	if (validator.isEmpty(password2)) {
		errors.password2 = 'This field is required';
	}

	if (password !== password2) {
		errors.password2 = 'Passwords must be same';
	}
	return {
		errors,
		isValid: isEmpty(errors)
	};
};
