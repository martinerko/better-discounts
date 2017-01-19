import isEmpty from 'lodash.isempty'
import { AUTHENTICATE_USER, SET_CURRENT_USER, AUTHENTICATE_USER_FAILURE } from '../actions/authentication';

const INITIAL_STATE = {
	isAuthenticated: false,
	profile: null,
	error: null,
	loading: false
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case AUTHENTICATE_USER:
			return {
				...state,
				isAuthenticated: false,
				error: null,
				loading: true
			};
		case SET_CURRENT_USER:
			const user = action.payload.data || {};
			return {
				...state,
				isAuthenticated: !isEmpty(user),
				profile: user,
				error: null,
				loading: false
			};
		case AUTHENTICATE_USER_FAILURE: // return error and make loading = false
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
