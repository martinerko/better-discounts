import { combineReducers } from 'redux';
import usersReducer from './users';
import discountsReducer from './discounts';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  users: usersReducer,
  discounts: discountsReducer,
  routing
// somFe additional reducers
});

export default rootReducer;
