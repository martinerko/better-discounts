import { LOAD_USER_LOCATION, LOAD_USER_LOCATION_SUCCESS, LOAD_USER_LOCATION_FAILURE } from '../actions/users';

const INITIAL_STATE = {
	location: null,
	error: null,
	loading: false
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		// loading user location from external service
		case LOAD_USER_LOCATION:
			return {
				...state,
				location: null,
				error: null,
				loading: true
			};
		case LOAD_USER_LOCATION_SUCCESS: // loading has successfully finished
			return {
				...state,
				location: action.payload.data,
				error: null,
				loading: false
			};
		case LOAD_USER_LOCATION_FAILURE: // return error and make loading = false
			let error = action.payload.data || {
				message: action.payload.message
			};
			return {
				...state,
				location: null,
				error: error,
				loading: false
			};
		default:
			return state;
	}
}
