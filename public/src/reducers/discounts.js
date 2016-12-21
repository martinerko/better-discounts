import { LOAD_BEST_DISCOUNTS, LOAD_BEST_DISCOUNTS_SUCCESS, LOAD_BEST_DISCOUNTS_FAILURE } from '../actions/discounts';

const INITIAL_STATE = {
  bestDiscounts: null,
  error: null,
  loading: false
};

function transformDiscountData({ p: code, m: manufacturer, n: name, percentage, p1: price, t:thumbnail }) {
  return {
    code,
    manufacturer,
    name,
    percentage,
    price_orig : price.l4,
    price_new : price.o,
    thumbnail
  };
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    // loading best discounts from external service
    case LOAD_BEST_DISCOUNTS:
      return {
        ...state,
        bestDiscounts: null,
        error: null,
        loading: true
      };
    case LOAD_BEST_DISCOUNTS_SUCCESS: // loading has successfully finished
      return {
        ...state,
        bestDiscounts: action.payload.data.map(transformDiscountData),
        error: null,
        loading: false
      };
    case LOAD_BEST_DISCOUNTS_FAILURE: // return error and make loading = false
      const error = action.payload.data || {
        message: action.payload.message
      };
      return {
        ...state,
        bestDiscounts: null,
        error: error,
        loading: false
      };
    default:
      return state;
  }
}
