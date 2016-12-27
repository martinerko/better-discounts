export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS';
export const AUTHENTICATE_USER_FAILURE = 'AUTHENTICATE_USER_FAILURE';

export function authenticateUser() {
	// simulate authentication
	const request = new Promise(
		function(resolve, reject) {
			const username = 'martinerko';
			setTimeout(resolve.bind(null, {
				username
			}, 5000));
		});

	return {
		type: AUTHENTICATE_USER,
		payload: request
	};
}

export function authenticateUserSuccess(userData) {
	return {
		type: AUTHENTICATE_USER_SUCCESS,
		payload: userData
	};
}

export function authenticateUserFailure(error) {
	return {
		type: AUTHENTICATE_USER_FAILURE,
		payload: error
	};
}
