// define smart container
import { connect } from 'react-redux';
import { loadCategories, loadCategoriesSuccess, loadCategoriesFailure, resetCategories } from '../actions/categories';

// load dump component
import data from '../components/CategoryTree';

const mapDispatchToProps = (dispatch) => {
	return {
		loadCategories: (seoTokens = []) => {
			// load category tree
			dispatch(loadCategories(seoTokens))
				.then((response) => {
					if (!response.error) {
						dispatch(loadCategoriesSuccess(response.payload));
					} else {
						dispatch(loadCategoriesFailure(response.payload));
					}
				});
		}
	};
};

function mapStateToProps({categories}, {categoryPath}) {
	const {loading, data, error} = categories;

	return {
		error,
		loading,
		categoryDetail: data.detail, // detail of current category
		categoryChildren: data.children, // nested categories
		categoryPath // url seo tokens
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(data);
