// define smart container
import { connect } from 'react-redux';
import { subscribeByProduct, subscribeByProductSuccess, subscribeByProductFailure, //
	unsubscribeByProduct, unsubscribeByProductSuccess, unsubscribeByProductFailure } from '../actions/subscriptions';

// load dump component
import ActionButton from '../components/ActionButton';

const mapDispatchToProps = (dispatch) => {
	return {
		subscribe: (productCode) => {
			console.log(`subscribe to ${productCode}`);
			dispatch(subscribeByProduct(productCode))
				.then((response) => {
					if (!response.error) {
						dispatch(subscribeByProductSuccess(response.payload));
					} else {
						dispatch(subscribeByProductFailure(response.payload));
					}
				});
		},
		unsubscribe: (productCode) => {
			console.log(`unsubscribe to ${productCode}`);
			dispatch(unsubscribeByProduct(productCode))
				.then((response) => {
					if (!response.error) {
						dispatch(unsubscribeByProductSuccess(response.payload));
					} else {
						dispatch(unsubscribeByProductFailure(response.payload));
					}
				});
		}
	};
};

function mapStateToProps({subscriptions, authentication}, {categoryPath, productCode}) {
	const {loading, error, subscribedProducts} = subscriptions;
	const {isAuthenticated} = authentication;
	const isSubscribed = productCode in subscribedProducts;
	return {
		error,
		loading,
		categoryPath,
		productCode,
		isSubscribed,
		isAuthenticated
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionButton);
