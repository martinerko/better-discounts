import axios from 'axios';

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const LOAD_CATEGORIES_SUCCESS = 'LOAD_CATEGORIES_SUCCESS';
export const LOAD_CATEGORIES_FAILURE = 'LOAD_CATEGORIES_FAILURE';
export const RESET_CATEGORIES = 'RESET_CATEGORIES';

export function loadCategories(categoryPath = []) {
  let q = ['gt(percentage,50)', `eq(level,${categoryPath.length + 1})`];
  if (categoryPath.length) {
    const seoTokens = encodeURIComponent(`${categoryPath.join('/')}`);
    q.push(`eq(seoTokens,${seoTokens})`);
  }

  const url = `http://localhost:3333/api/discounted-categories?${q.join('&')}`;
  const request = axios({
    method: 'get',
    url
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

export function resetCategories() {
  return {
    type: RESET_CATEGORIES
  };
}
