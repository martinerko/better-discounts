// define smart container
import { connect } from 'react-redux';
import { loadUserLocation, loadUserLocationSuccess, loadUserLocationFailure } from '../actions/users';
import { authenticateUser, authenticateUserSuccess, authenticateUserFailure } from '../actions/authentication';

// load dump component
import App from '../components/App';

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: () => {
			// check whether user is authenticated
      dispatch(authenticateUser())
        .then((response) => {
          if (!response.error) {
            dispatch(authenticateUserSuccess(response.payload));
          } else {
            dispatch(authenticateUserFailure(response.payload));
          }
        });
    },

    loadUserLocation: () => {
      // resolve user location from public API
      dispatch(loadUserLocation())
        .then((response) => {
          if (!response.error) {
            dispatch(loadUserLocationSuccess(response.payload));
          } else {
            dispatch(loadUserLocationFailure(response.payload));
          }
        });
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
