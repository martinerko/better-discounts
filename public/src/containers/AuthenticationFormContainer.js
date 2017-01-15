import { connect } from 'react-redux';
import AuthenticationForm from '../components/AuthenticationForm';
import { authenticateUser, authenticateUserSuccess, authenticateUserFailure } from '../actions/authentication';
import { SubmissionError } from 'redux-form';

const mapDispatchToProps = (dispatch) => {
	return {
		signInUser: (values) => {
			return dispatch(authenticateUser(values))
				.then((response) => {
					console.log(response);
					if (!response.error) {
						$('#authenticationModal').modal('hide');
						return dispatch(authenticateUserSuccess(response.payload));
					} else {
						// we need to hide loading overlay
						dispatch(authenticateUserFailure(response.payload));
						// and reject onSubmit function + display the error message
						throw new SubmissionError({
							_error: response.payload.message
						});
					}
				});
		},
		registerUser: (values) => {
			// TODO
			console.log(values);
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
