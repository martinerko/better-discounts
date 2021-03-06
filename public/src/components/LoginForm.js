import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, propTypes as reduxFormPropTypes } from 'redux-form';
import renderField from './renderField';
import validateData from '../../../shared/validations/signin';

class LoginForm extends Component {
	static propTypes = {
		signInUser: PropTypes.func.isRequired,
		// props added by redux-form decorator
		...reduxFormPropTypes
	};

	constructor(props) {
		super(props);
		this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this);
	}

	onLoginFormSubmit(values) {
		return this.props.signInUser(values);
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
					<form id="loginForm" onSubmit={handleSubmit(this.onLoginFormSubmit)}>
						<Field component={renderField} type="text" id="loginEmail" name="email" label="Email" />
						<Field component={renderField} type="password" id="loginPassword" name="password" label="Password" />
						<div className="checkbox">
							<label>
								<input type="checkbox" name="remember" id="remember" /> Remember login
							</label>
							<p className="help-block">(if this is a private computer)</p>
						</div>
						<button type="submit" className="btn btn-success btn-block" disabled={submitting}>Login</button>
						<a href="/forgot/" className="btn btn-default btn-block">Forgotten password</a>
					</form>
				</div>
			</div>);
	}
}

const validate = ({email = '', password = ''}) => {
	const {errors} = validateData({
		email,
		password
	});
	return errors;
};

// Decorate the form component
export default reduxForm({
	form: 'LoginForm',
	validate
})(LoginForm);
