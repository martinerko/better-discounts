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
						dispatch(loadDiscountsSuccess(response.payload));
					} else {
						dispatch(loadDiscountsFailure(response.payload));
					}
				});
		}
	};
};

function mapStateToProps({discounts}, {categoryPath}) {
	const {loading, data, error, percentage} = discounts;

	return {
		error,
		loading,
		data,
		categoryPath,
		percentage
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscountsGrid);
