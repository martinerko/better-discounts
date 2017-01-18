import { AUTHENTICATE_USER, AUTHENTICATE_USER_SUCCESS, AUTHENTICATE_USER_FAILURE, LOGOUT } from '../actions/authentication';

const INITIAL_STATE = {
	isAdmin: false,
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
		case AUTHENTICATE_USER_SUCCESS:
			const {data} = action.payload;
			return {
				...state,
				isAuthenticated: true,
				isAdmin: data.admin,
				profile: data,
				error: null,
				loading: false
			};
		case AUTHENTICATE_USER_FAILURE: // return error and make loading = false
			const error = action.payload.data || {
				message: action.payload.message
			};
			return {
				...state,
				isAuthenticated: false,
				error: error,
				loading: false
			};
		case LOGOUT:
			return {
				...state,
				...INITIAL_STATE
			};
		default:
			return state;
	}
}
