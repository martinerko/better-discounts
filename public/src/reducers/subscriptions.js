import omit from 'lodash.omit';
import isEmpty from 'lodash.isempty';
import { LOAD_SUBSCRIPTIONS, LOAD_SUBSCRIPTIONS_SUCCESS, LOAD_SUBSCRIPTIONS_FAILURE, //
	SUBSCRIBE, UNSUBSCRIBE, //
	SUBSCRIPTION_BY_PRODUCT_SUCCESS, SUBSCRIPTION_BY_CATEGORY_SUCCESS, //
	UNSUBSCRIPTION_BY_PRODUCT_SUCCESS, UNSUBSCRIPTION_BY_CATEGORY_SUCCESS, //
	SUBSCRIPTION_FAILURE, UNSUBSCRIPTION_FAILURE } from '../actions/subscriptions';
import { SET_CURRENT_USER } from '../actions/authentication';

const INITIAL_STATE = {
	subscribedProducts: {},
	subscribedCategories: {},
	error: null,
	loading: false
};

function arr2obj(arr) {
	return arr.reduce((res, item) => {
		res[item] = true;
		return res;
	}, {});
}

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case LOAD_SUBSCRIPTIONS:
			return {
				...INITIAL_STATE,
				loading: true
			};
		case LOAD_SUBSCRIPTIONS_SUCCESS:
			return {
				...state,
				subscribedProducts: arr2obj(action.payload.data.subscribedProducts),
				subscribedCategories: arr2obj(action.payload.data.subscribedCategories),
				error: null,
				loading: false
			};
		case SUBSCRIBE:
		case UNSUBSCRIBE:
			return {
				...state,
				error: null,
				loading: true
			};
		case LOAD_SUBSCRIPTIONS_FAILURE:
		case UNSUBSCRIPTION_FAILURE:
		case SUBSCRIPTION_FAILURE: // return error and make loading = false
			const error = action.payload.data || {
				message: action.payload.message
			};
			return {
				...state,
				error,
				loading: false
			};
		case SUBSCRIPTION_BY_PRODUCT_SUCCESS:
			let subscribedProducts = {
				...state.subscribedProducts
			};
			subscribedProducts[action.payload.data.code] = true;
			return {
				...state,
				subscribedProducts,
				error: null,
				loading: false
			};
		case SUBSCRIPTION_BY_CATEGORY_SUCCESS:
			let subscribedCategories = {
				...state.subscribedProducts
			};
			subscribedCategories[action.payload.data.code] = true;
			return {
				...state,
				subscribedCategories: [...state.subscribedCategories, action.payload.data.code],
				error: null,
				loading: false
			};
		case UNSUBSCRIPTION_BY_PRODUCT_SUCCESS:
			return {
				...state,
				subscribedProducts: omit(state.subscribedProducts, [action.payload.data.code]),
				error: null,
				loading: false
			};
		case UNSUBSCRIPTION_BY_CATEGORY_SUCCESS:
			return {
				...state,
				subscribedCategories: omit(state.subscribedCategories, [action.payload.data.code]),
				error: null,
				loading: false
			};
		case SET_CURRENT_USER:
			if (isEmpty(action.payload.data || {})) {
				return {
					...INITIAL_STATE
				};
			}
			return state;
		default:
			return state;
	}
}
