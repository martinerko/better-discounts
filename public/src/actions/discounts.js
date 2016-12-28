import axios from 'axios';

export const LOAD_DISCOUNTS = 'LOAD_DISCOUNTS';
export const LOAD_DISCOUNTS_SUCCESS = 'LOAD_DISCOUNTS_SUCCESS';
export const LOAD_DISCOUNTS_FAILURE = 'LOAD_DISCOUNTS_FAILURE';
export const SET_DISCOUNTS_PERCENTAGE = 'SET_DISCOUNTS_PERCENTAGE';

export function loadDiscounts(categoryPath = [], percentage) {
	const columns = 'percentage,m,n,p1,category_seo_token,t,p,s';

	let q = [`gt(percentage,${percentage})`];
	if (categoryPath.length) {
		const seoTokens = encodeURIComponent(`${categoryPath.join('/')}`);
		q.push(`eq(seoTokens,${seoTokens})`);
	}
	q.push(`select(${columns})`, 'sort(-percentage)', 'limit(10)');

	const url = `http://localhost:3333/api/discounts?${q.join('&')}`;

	return {
		type: LOAD_DISCOUNTS,
		payload: axios(url)
	};
}

export function loadDiscountsSuccess(data) {
	return {
		type: LOAD_DISCOUNTS_SUCCESS,
		payload: data
	};
}

export function loadDiscountsFailure(error) {
	return {
		type: LOAD_DISCOUNTS_FAILURE,
		payload: error
	};
}

export function setDiscountsPercentage(percentage) {
	return {
		type: SET_DISCOUNTS_PERCENTAGE,
		percentage: percentage
	};
}
