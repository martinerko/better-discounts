import { connect } from 'react-redux';
import { reset, SubmissionError } from 'redux-form';
import AuthenticationForm from '../components/AuthenticationForm';
import { authenticateUser, authenticateUserSuccess, authenticateUserFailure, logout } from '../actions/authentication';
import { signUpUser, signUpUserFailure } from '../actions/signup';

const mapDispatchToProps = (dispatch) => {
	return {
		signInUser: (values) => {
			return dispatch(authenticateUser(values))
				.then(({payload, error = false}) => {
					if (!error) {
						// reset our form
						dispatch(reset('LoginForm'));
						// hide modal window
						$('#authenticationModal').modal('hide');
						// once the user has been registered, we automatically sign in him
						return dispatch(authenticateUserSuccess(payload.data));
					} else {
						// calling this we make sure that we hide loading overlay
						dispatch(authenticateUserFailure(payload.response));
						// and reject onSubmit function + display the error message
						const {message = null, validation = {}} = payload.response.data;
						if (validation) {
							throw new SubmissionError({
								_error: message, // error message
								...validation // validation error related to fields
							});
						}
					}
				});
		},
		registerUser: (values) => {
			return dispatch(signUpUser(values))
				.then(({payload, error = false}) => {
					if (!error) {
						// reset our form
						dispatch(reset('RegistrationForm'));
						// hide modal window
						$('#authenticationModal').modal('hide');
						// once the user has been registered, we automatically sign in him
						return dispatch(authenticateUserSuccess(payload.data));
					} else {
						// calling this we make sure that we hide loading overlay
						dispatch(signUpUserFailure(payload.response));
						// and reject onSubmit function + display the error message
						const {message = null, validation = {}} = payload.response.data;
						if (validation) {
							throw new SubmissionError({
								_error: message, // error message
								...validation // validation error related to fields
							});
						}
					}
				});
		}
	};
};

const mapStateToProps = ({authentication}) => {
	const {isAuthenticated} = authentication;

	return {
		isAuthenticated
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationForm);
