// define smart container
import { connect } from 'react-redux';
// import { loadUserLocation, loadUserLocationSuccess, loadUserLocationFailure } from '../actions/users';
import { loadSubscriptions, loadSubscriptionsSuccess, loadSubscriptionsFailure } from '../actions/subscriptions';

// load dump component
import App from '../components/App';

const mapDispatchToProps = (dispatch) => {
	return {
		// authenticateUser: () => {
		// 	// check whether user is authenticated
		// 	dispatch(authenticateUser())
		// 		.then((response) => {
		// 			if (!response.error) {
		// 				dispatch(authenticateUserSuccess(response.payload));
		// 			} else {
		// 				dispatch(authenticateUserFailure(response.payload));
		// 			}
		// 		});
		// },
		// loadUserLocation: () => {
		// 	// resolve user location from public API
		// 	dispatch(loadUserLocation())
		// 		.then((response) => {
		// 			if (!response.error) {
		// 				dispatch(loadUserLocationSuccess(response.payload));
		// 			} else {
		// 				dispatch(loadUserLocationFailure(response.payload));
		// 			}
		// 		});
		// },
		loadSubscriptions: () => {
			console.log('loading subscriptions...');
			// load top discounts to display
			dispatch(loadSubscriptions())
				.then((response) => {
					if (!response.error) {
						dispatch(loadSubscriptionsSuccess(response.payload));
					} else {
						dispatch(loadSubscriptionsFailure(response.payload));
					}
				});
		}
	};
};

const mapStateToProps = ({authentication}) => {
	const {isAuthenticated} = authentication;

	return {
		isAuthenticated
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
