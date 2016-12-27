import axios from 'axios';

export const LOAD_PERSONALIZED_CATEGORIES = 'LOAD_PERSONALIZED_CATEGORIES';
export const LOAD_PERSONALIZED_CATEGORIES_SUCCESS = 'LOAD_PERSONALIZED_CATEGORIES_SUCCESS';
export const LOAD_PERSONALIZED_CATEGORIES_FAILURE = 'LOAD_PERSONALIZED_CATEGORIES_FAILURE';

export function loadPersonalizedCategories() {
	// http://localhost:3333/api/category-tree?gt(percentage,60)
	const svc = 'http://localhost:3333/api/category-tree';

	const request = axios({
		method: 'get',
		url: `${svc}?gt(percentage,70)`
	});

	return {
		type: LOAD_PERSONALIZED_CATEGORIES,
		payload: request
	};
}

export function loadPersonalizedCategoriesSuccess(data) {
	return {
		type: LOAD_PERSONALIZED_CATEGORIES_SUCCESS,
		payload: data
	};
}

export function loadPersonalizedCategoriesFailure(error) {
	return {
		type: LOAD_PERSONALIZED_CATEGORIES_FAILURE,
		payload: error
	};
}
