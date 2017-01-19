import axios from 'axios';
import { app as appConfig } from '../../../config';
const {SERVER_URL, SERVER_PORT} = appConfig;

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE';

export function changePassword(data) {
	const svc = `${SERVER_URL}:${SERVER_PORT}/auth/change-password`;
	const request = axios.post(svc, {
		data
	});

	return {
		type: CHANGE_PASSWORD,
		payload: request
	};
}

export function changePasswordSuccess() {
	return {
		type: CHANGE_PASSWORD_SUCCESS
	};
}

export function changePasswordFailure(error) {
	return {
		type: CHANGE_PASSWORD_FAILURE,
		payload: error
	};
}
