import axios from 'axios';

export const LOAD_BEST_DISCOUNTS = 'LOAD_BEST_DISCOUNTS';
export const LOAD_BEST_DISCOUNTS_SUCCESS = 'LOAD_BEST_DISCOUNTS_SUCCESS';
export const LOAD_BEST_DISCOUNTS_FAILURE = 'LOAD_BEST_DISCOUNTS_FAILURE';

export function loadBestDiscounts() {
  const svc = 'http://localhost:3333/api/discounts';
  const columns = 'percentage,m,n,p1,category_seo_token,t,p,s';

  const request = axios({
    method: 'get',
    url: `${svc}?gt(percentage,50)&select(${columns})&sort(-percentage)&limit(10)`
  });

  return {
    type: LOAD_BEST_DISCOUNTS,
    payload: request
  };
}

export function loadBestDiscountsSuccess(data) {
  return {
    type: LOAD_BEST_DISCOUNTS_SUCCESS,
    payload: data
  };
}

export function loadBestDiscountsFailure(error) {
  return {
    type: LOAD_BEST_DISCOUNTS_FAILURE,
    payload: error
  };
}
