import axios from 'axios';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
export const LOAD_CATEGORIES_FAILURE = 'LOAD_CATEGORIES_FAILURE';

export function loadCategories() {
	// http://localhost:3333/api/category-tree?gt(percentage,60)
  const svc = 'http://localhost:3333/api/category-tree';

  const request = axios({
    method: 'get',
    url: `${svc}?gt(percentage,50)`
  });

  return {
    type: LOAD_CATEGORIES,
    payload: request
  };
}

export function loadCategoriesSuccess(data) {
  return {
    type: LOAD_CATEGORIES_SUCCESS,
    payload: data
  };
}

export function loadCategoriesFailure(error) {
  return {
    type: LOAD_CATEGORIES_FAILURE,
    payload: error
  };
}
