import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, propTypes as reduxFormPropTypes } from 'redux-form';
import renderField from './renderField';
import validateData from '../../../shared/validations/changePassword';

class ChangePasswordForm extends Component {
	static propTypes = {
		changePassword: PropTypes.func.isRequired,
		// props added by redux-form decorator
		...reduxFormPropTypes
	};

	constructor(props) {
		super(props);
		this.onSubmitForm = this.onSubmitForm.bind(this);
	}

	onSubmitForm(values) {
		return this.props.changePassword(values);
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
			<div className="panel panel-default">
				<div className="panel-heading">Change Password</div>
				<div className="panel-body">
					{this.renderErrorMessage()}
					<form id="changePasswordForm" onSubmit={handleSubmit(this.onSubmitForm)}>
						<Field component={renderField} type="text" id="currentPassword" name="currentPassword" label="Current Password" />
						<Field component={renderField} type="password" id="newPassword" name="newPassword" label="New Password" />
						<Field component={renderField} type="password" id="newPassword2" name="newPassword2" label="Confirm New Password" />
						<button type="submit" className="btn btn-success btn-block" disabled={submitting}>Change Password</button>
					</form>
				</div>
			</div>);
	}
}

const validate = ({currentPassword = '', newPassword = '', newPassword2 = ''}) => {
	const {errors} = validateData({
		currentPassword,
		newPassword,
		newPassword2
	});
	return errors;
};

// Decorate the form component
export default reduxForm({
	form: 'ChangePasswordForm',
	validate
})(ChangePasswordForm);
