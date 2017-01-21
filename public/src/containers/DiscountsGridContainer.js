// define smart container
import { connect } from 'react-redux';
import { loadDiscounts, loadDiscountsSuccess, loadDiscountsFailure } from '../actions/discounts';

// load dump component
import DiscountsGrid from '../components/DiscountsGrid';

const mapDispatchToProps = (dispatch) => {
	return {
		loadDiscounts: (seoTokens = [], percentage) => {
			// load top discounts to display
			dispatch(loadDiscounts(seoTokens, percentage))
				.then((response) => {
					if (!response.error) {
						// setTimeout(function() {
						dispatch(loadDiscountsSuccess(response.payload));
					// }, 1000);
					} else {
						dispatch(loadDiscountsFailure(response.payload));
					}
				});
		}
	};
};

function mapStateToProps({discounts, authentication, subscriptions}, {categoryPath}) {
	const {loading, data, error, percentage} = discounts;
	const {isAuthenticated} = authentication;
	const {subscribedProducts} = subscriptions;

	return {
		error,
		loading,
		data,
		categoryPath,
		percentage,
		subscribedProducts,
		isAuthenticated
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscountsGrid);
