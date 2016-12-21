import axios from 'axios';

export const LOAD_USER_LOCATION = 'LOAD_USER_LOCATION';
export const LOAD_USER_LOCATION_SUCCESS = 'LOAD_USER_LOCATION_SUCCESS';
export const LOAD_USER_LOCATION_FAILURE = 'LOAD_USER_LOCATION_FAILURE';

export function loadUserLocation() {
  const request = axios({
    method: 'get',
    url: 'http://ip-api.com/json'
  });

  return {
    type: LOAD_USER_LOCATION,
    payload: request
  };
}

export function loadUserLocationSuccess(currentLocation) {
  return {
    type: LOAD_USER_LOCATION_SUCCESS,
    payload: currentLocation
  };
}

export function loadUserLocationFailure(error) {
  return {
    type: LOAD_USER_LOCATION_FAILURE,
    payload: error
  };
}
