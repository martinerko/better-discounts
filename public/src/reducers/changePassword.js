import { CHANGE_PASSWORD, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE } from '../actions/authentication';

const INITIAL_STATE = {
	error: null,
	loading: false
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case CHANGE_PASSWORD:
			return {
				...INITIAL_STATE,
				loading: true
			};
		case CHANGE_PASSWORD_SUCCESS:
			return {
				...INITIAL_STATE,
				loading: false
			};
		case CHANGE_PASSWORD_FAILURE: // return error and make loading = false
			const error = action.payload.data || {
				message: action.payload.message
			};
			return {
				...INITIAL_STATE,
				error
			};
		default:
			return state;
	}
}
