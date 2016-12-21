// define smart container
import { connect } from 'react-redux';
import { loadUserLocation, loadUserLocationSuccess, loadUserLocationFailure } from '../actions/users';

// load dump component
import App from '../components/App.js';

const mapDispatchToProps = (dispatch) => {
  return {
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
