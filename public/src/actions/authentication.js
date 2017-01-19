import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { app as appConfig } from '../../../config';
import setAuthorizationToken from '../utils/auth';
const {SERVER_URL, SERVER_PORT} = appConfig;

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const AUTHENTICATE_USER_FAILURE = 'AUTHENTICATE_USER_FAILURE';

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

export function authenticateUserSuccess({token}) {
	localStorage.setItem('jwtToken', token);
	// set authorization header so it will be send with every request
	setAuthorizationToken(token);
	// inform others that user was signed in
	return setCurrentUser(jwtDecode(token));
}

export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
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
	// inform others that user is not signed anymore
	return setCurrentUser({});
}
