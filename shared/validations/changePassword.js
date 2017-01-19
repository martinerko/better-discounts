const validator = require('validator');
const isEmpty = require('lodash.isempty');

module.exports = function validateData({currentPassword = '', newPassword = '', newPassword2 = ''}) {
	let errors = {};

	if (validator.isEmpty(currentPassword)) {
		errors.currentPassword = 'This field is required';
	}

	if (validator.isEmpty(newPassword)) {
		errors.newPassword = 'This field is required';
	}

	if (validator.isEmpty(newPassword2)) {
		errors.newPassword2 = 'This field is required';
	}

	if (newPassword !== newPassword2) {
		errors.newPassword2 = 'New Passwords must be same';
	}
	return {
		errors,
		isValid: isEmpty(errors)
	};
};
