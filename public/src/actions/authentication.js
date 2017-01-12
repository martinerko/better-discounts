export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS';
export const AUTHENTICATE_USER_FAILURE = 'AUTHENTICATE_USER_FAILURE';

export function authenticateUser({email, password}) {
	// simulate authentication
	const request = new Promise(
		function(resolve, reject) {
			const username = 'martinerko';
			// fake svc call
			setTimeout(() => {
				if (~email.indexOf('martinerko')) {
					resolve({
						data: {
							username
						}
					});
				} else {
					reject({
						message: 'Email or password is incorrect!'
					});
				}
			}, 3000);
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
