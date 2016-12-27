// define smart container
import { connect } from 'react-redux';
import { loadBestDiscounts, loadBestDiscountsSuccess, loadBestDiscountsFailure } from '../actions/discounts';

// load dump component
import BestDiscounts from '../components/DiscountsGrid';

const mapDispatchToProps = (dispatch) => {
	return {
		loadDiscounts: () => {
			// load top discounts to display
			dispatch(loadBestDiscounts())
				.then((response) => {
					if (!response.error) {
						dispatch(loadBestDiscountsSuccess(response.payload));
					} else {
						dispatch(loadBestDiscountsFailure(response.payload));
					}
				});
		}
	};
};

function mapStateToProps({discounts}) {
	const {loading, data, error} = discounts;

	return {
		error,
		loading,
		data
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BestDiscounts);
