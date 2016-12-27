import { LOAD_CATEGORIES, LOAD_CATEGORIES_SUCCESS, LOAD_CATEGORIES_FAILURE, RESET_CATEGORIES } from '../actions/categories';

const INITIAL_STATE = {
	data: {
		detail: null,
		children: null
	},
	error: null,
	loading: false
};

function transformCategoriesData({name, category_id: categoryId, seo_token: seoToken}) {
	return {
		name,
		categoryId,
		seoToken
	};
}

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		// loading best discounts from external service
		case LOAD_CATEGORIES:
			return {
				...state,
				...INITIAL_STATE,
				loading: true
			};
		case LOAD_CATEGORIES_SUCCESS: // loading has successfully finished
			const {detail, children} = action.payload.data;
			return {
				...state,
				...INITIAL_STATE,
				data: {
					detail: detail && transformCategoriesData(detail),
					children: children.map(c => transformCategoriesData(c))
				}
			};
		case LOAD_CATEGORIES_FAILURE: // return error and make loading = false
			const error = action.payload.data || {
				message: action.payload.message
			};
			return {
				...state,
				...INITIAL_STATE,
				error: error
			};
		case RESET_CATEGORIES:
			return {
				...state,
				...INITIAL_STATE,
				loading: true
			};
		default:
			return state;
	}
}
