import { combineReducers } from 'redux';
import usersReducer from './users';
import discountsReducer from './discounts';
import categoriesReducer from './categories';
import personalizedReducer from './personalized';
import authenticationReducer from './authentication';
import subscriptionsReducer from './subscriptions';
import { reducer as form } from 'redux-form';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
	users: usersReducer,
	discounts: discountsReducer,
	categories: categoriesReducer,
	personalized: personalizedReducer,
	authentication: authenticationReducer,
	subscriptions: subscriptionsReducer,
	form,
	routing
// some additional reducers
});

export default rootReducer;
