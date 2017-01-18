import axios from 'axios';
import { app as appConfig } from '../../../config';
const {SERVER_URL, SERVER_PORT} = appConfig;

export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';

export function signUpUser(data) {
	const svc = `${SERVER_URL}:${SERVER_PORT}/auth/signup`;
	const request = axios.post(svc, {
		data
	});

	return {
		type: SIGNUP_USER,
		payload: request
	};
}

export function signUpUserFailure(error) {
	return {
		type: SIGNUP_USER_FAILURE,
		payload: error
	};
}
