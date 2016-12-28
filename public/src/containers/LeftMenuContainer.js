// define smart container
import { connect } from 'react-redux';
import { loadCategories, loadCategoriesSuccess, loadCategoriesFailure } from '../actions/categories';
import { setDiscountsPercentage } from '../actions/discounts';

// load dump component
import LeftMenu from '../components/LeftMenu';

const mapDispatchToProps = (dispatch) => {
	return {
		loadCategories: (seoTokens = [], percentage) => {
			// load category tree
			dispatch(loadCategories(seoTokens, percentage))
				.then((response) => {
					if (!response.error) {
						dispatch(loadCategoriesSuccess(response.payload));
					} else {
						dispatch(loadCategoriesFailure(response.payload));
					}
				});
		},

		setDiscountsPercentage: (percentage) => {
			dispatch(setDiscountsPercentage(percentage));
		}
	};
};

function mapStateToProps({categories, discounts}, {categoryPath}) {
	const {loading, data, error} = categories;
	const {percentage} = discounts;

	return {
		error,
		loading,
		categoryDetail: data.detail, // detail of current category
		categoryChildren: data.children, // nested categories
		categoryPath, // url seo tokens,
		percentage
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
