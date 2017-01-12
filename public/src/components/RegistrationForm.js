import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, propTypes as reduxFormPropTypes } from 'redux-form';
import renderField from './renderField';

class RegistrationForm extends Component {
	static propTypes = {
		registerUser: PropTypes.func.isRequired,
		// props added by redux-form decorator
		...reduxFormPropTypes
	// handleSubmit: PropTypes.func,
	// submitting: PropTypes.bool
	};

	constructor(props) {
		super(props);
		this.onRegistrationFormSubmit = this.onRegistrationFormSubmit.bind(this);
	}

	onRegistrationFormSubmit(values) {
		return this.props.registerUser(values);
	}

	renderErrorMessage() {
		const {error} = this.props;
		if (error) {
			return (
				<div className="alert alert-danger">
					{error}
				</div>);
		}
		return null;
	}

	render() {
		const {submitting, handleSubmit} = this.props;

		return (
			<div>
				{this.renderErrorMessage()}
				<div className="well">
					<form id="registrationForm" onSubmit={handleSubmit(this.onRegistrationFormSubmit)}>
						<Field component={renderField} type="text" id="registrationName" name="name" label="Name" />
						<Field component={renderField} type="text" id="registrationEmail" name="email" label="Email" />
						<Field component={renderField} type="password" id="registrationPassword" name="password" label="Password" />
						<Field component={renderField} type="password" id="registrationPassword2" name="password2" label="Confirm password" />
						<button type="submit" className="btn btn-success btn-block" disabled={submitting}>Register</button>
					</form>
				</div>
			</div>);
	}
}

const validate = (values) => {
	const errors = {};
	let hasErrors = false;
	if (!values.email || values.email.trim() === '') {
		errors.email = 'Enter email';
		hasErrors = true;
	}
	if (!values.password || values.password.trim() === '') {
		errors.password = 'Enter password';
		hasErrors = true;
	}
	return hasErrors && errors;
};

// Decorate the form component
export default reduxForm({
	form: 'RegistrationForm',
	validate
})(RegistrationForm);
