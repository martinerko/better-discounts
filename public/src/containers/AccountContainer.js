import { connect } from 'react-redux';
import { reset, SubmissionError } from 'redux-form';
import Account from '../components/Account';
import { changePassword, changePasswordSuccess, changePasswordFailure } from '../actions/changePassword';

function mapStateToProps({authentication}) {
	const {profile} = authentication;

	return {
		profile
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		changePassword: (values) => {
			return dispatch(changePassword(values))
				.then(({payload, error = false}) => {
					if (!error) {
						// reset our form
						dispatch(reset('ChangePasswordForm'));
						return dispatch(changePasswordSuccess(payload.data));
					} else {
						// calling this we make sure that we hide loading overlay
						dispatch(changePasswordFailure(payload.response));
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

export default connect(mapStateToProps, mapDispatchToProps)(Account);
