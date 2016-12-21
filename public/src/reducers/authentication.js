import { AUTHENTICATE_USER, AUTHENTICATE_USER_SUCCESS, AUTHENTICATE_USER_FAILURE } from '../actions/authentication';

const INITIAL_STATE = {
  isAuthenticated: false,
  error: null,
  loading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    // loading best discounts from external service
    case AUTHENTICATE_USER:
      return {
        ...state,
        isAuthenticated: false,
        error: null,
        loading: true
      };
    case AUTHENTICATE_USER_SUCCESS: // loading has successfully finished
      return {
        ...state,
        isAuthenticated: true,
        error: null,
        loading: false
      };
    case AUTHENTICATE_USER_FAILURE: // return error and make loading = false
      const error = action.payload.data || {
        message: action.payload.message
      };
      return {
        ...state,
        isAuthenticated: false,
        error: error,
        loading: false
      };
    default:
      return state;
  }
}
