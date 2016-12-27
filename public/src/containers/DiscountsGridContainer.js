// define smart container
import { connect } from 'react-redux';
import { loadDiscounts, loadDiscountsSuccess, loadDiscountsFailure } from '../actions/discounts';

// load dump component
import DiscountsGrid from '../components/DiscountsGrid';

const mapDispatchToProps = (dispatch) => {
	return {
		loadDiscounts: (seoTokens = []) => {
			// load top discounts to display
			dispatch(loadDiscounts(seoTokens))
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
	const {loading, data, error} = discounts;

	return {
		error,
		loading,
		data,
		categoryPath
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscountsGrid);
