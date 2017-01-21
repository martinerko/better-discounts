import axios from 'axios';
import { app as appConfig } from '../../../config';
const {SERVER_URL, SERVER_PORT} = appConfig;

export const LOAD_SUBSCRIPTIONS = 'LOAD_SUBSCRIPTIONS';
export const SUBSCRIBE = 'SUBSCRIBE';
export const UNSUBSCRIBE = 'UNSUBSCRIBE';
export const LOAD_SUBSCRIPTIONS_SUCCESS = 'LOAD_SUBSCRIPTIONS_SUCCESS';
export const LOAD_SUBSCRIPTIONS_FAILURE = 'LOAD_SUBSCRIPTIONS_FAILURE';
export const SUBSCRIPTION_BY_PRODUCT_SUCCESS = 'SUBSCRIPTION_BY_PRODUCT_SUCCESS';
export const SUBSCRIPTION_BY_CATEGORY_SUCCESS = 'SUBSCRIPTION_BY_CATEGORY_SUCCESS';
export const UNSUBSCRIPTION_BY_PRODUCT_SUCCESS = 'UNSUBSCRIPTION_BY_PRODUCT_SUCCESS';
export const UNSUBSCRIPTION_BY_CATEGORY_SUCCESS = 'UNSUBSCRIPTION_BY_CATEGORY_SUCCESS';
export const SUBSCRIPTION_FAILURE = 'SUBSCRIPTION_FAILURE';
export const UNSUBSCRIPTION_FAILURE = 'UNSUBSCRIPTION_FAILURE';

export function loadSubscriptions() {
	const svc = `${SERVER_URL}:${SERVER_PORT}/subscriptions/all`;

	return {
		type: LOAD_SUBSCRIPTIONS,
		payload: axios(svc)
	};
}

export function loadSubscriptionsSuccess(data) {
	return success(data, LOAD_SUBSCRIPTIONS_SUCCESS);
}

export function loadSubscriptionsFailure(error) {
	return failure(error, LOAD_SUBSCRIPTIONS_FAILURE);
}

export function subscribeByProduct(data) {
	return subscribe(data);
}

export function subscribeByProductSuccess(data) {
	return success(data, SUBSCRIPTION_BY_PRODUCT_SUCCESS);
}

export function subscribeByProductFailure(error) {
	return failure(error, SUBSCRIPTION_FAILURE);
}

export function subscribeByCategory(data) {
	return subscribe(data, 'category');
}

export function subscribeByCategorySuccess(data) {
	return success(data, SUBSCRIPTION_BY_CATEGORY_SUCCESS);
}

export function subscribeByCategoryFailure(error) {
	return failure(error, SUBSCRIPTION_FAILURE);
}

export function unsubscribeByProduct(data) {
	return unsubscribe(data);
}

export function unsubscribeByProductSuccess(data) {
	return success(data, UNSUBSCRIPTION_BY_PRODUCT_SUCCESS);
}

export function unsubscribeByProductFailure(error) {
	return failure(error, UNSUBSCRIPTION_FAILURE);
}

export function unsubscribeByCategory(data) {
	return unsubscribe(data, 'category');
}

export function unsubscribeByCategorySuccess(data) {
	return success(data, UNSUBSCRIPTION_BY_CATEGORY_SUCCESS);
}

export function unsubscribeByCategoryFailure(error) {
	return failure(error, UNSUBSCRIPTION_FAILURE);
}

export function success(data, type) {
	return {
		type,
		payload: data
	};
}

export function failure(error, type) {
	return {
		type,
		payload: error
	};
}

function subscribe(code, type = 'product') {
	const svc = `${SERVER_URL}:${SERVER_PORT}/subscriptions/subscribe-by-${type}`;
	const request = axios.post(svc, {
		code
	});

	return {
		type: SUBSCRIBE,
		payload: request
	};
}

function unsubscribe(code, type = 'product') {
	const svc = `${SERVER_URL}:${SERVER_PORT}/subscriptions/unsubscribe-by-${type}`;
	const request = axios.post(svc, {
		code
	});

	return {
		type: SUBSCRIBE,
		payload: request
	};
}
