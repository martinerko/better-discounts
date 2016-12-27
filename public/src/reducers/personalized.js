import { LOAD_PERSONALIZED_CATEGORIES, LOAD_PERSONALIZED_CATEGORIES_SUCCESS, LOAD_PERSONALIZED_CATEGORIES_FAILURE } from '../actions/personalized';

const INITIAL_STATE = {
	categoryTree: null,
	error: null,
	loading: false
};

function transformCategoriesData({name, category_id: categoryId}) {
	return {
		name,
		categoryId
	};
}

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		// loading best discounts from external service
		case LOAD_PERSONALIZED_CATEGORIES:
			return {
				...state,
				categoryTree: null,
				error: null,
				loading: true
			};
		case LOAD_PERSONALIZED_CATEGORIES_SUCCESS: // loading has successfully finished
			return {
				...state,
				categoryTree: action.payload.data.map(transformCategoriesData),
				error: null,
				loading: false
			};
		case LOAD_PERSONALIZED_CATEGORIES_FAILURE: // return error and make loading = false
			const error = action.payload.data || {
				message: action.payload.message
			};
			return {
				...state,
				categoryTree: null,
				error: error,
				loading: false
			};
		default:
			return state;
	}
}
