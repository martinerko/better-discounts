import axios from 'axios';
import { app as appConfig } from '../../../config';
import setAuthorizationToken from '../utils/auth';
const {SERVER_URL, SERVER_PORT} = appConfig;

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS';
export const AUTHENTICATE_USER_FAILURE = 'AUTHENTICATE_USER_FAILURE';
export const LOGOUT = 'LOGOUT';

export function authenticateUser(data) {
	const svc = `${SERVER_URL}:${SERVER_PORT}/auth/signin`;
	const request = axios.post(svc, {
		data
	});

	return {
		type: AUTHENTICATE_USER,
		payload: request
	};
}

export function authenticateUserSuccess({token, user}) {
	localStorage.setItem('jwtToken', token);
	// set authorization header so it will be send with every request
	setAuthorizationToken(token);

	return {
		type: AUTHENTICATE_USER_SUCCESS,
		payload: {
			data: user
		}
	};
}

export function authenticateUserFailure(error) {
	return {
		type: AUTHENTICATE_USER_FAILURE,
		payload: error
	};
}

export function logout() {
	localStorage.removeItem('jwtToken');
	// unset authorization header
	setAuthorizationToken(false);

	return {
		type: LOGOUT
	};
}
