// define smart container
import { connect } from 'react-redux';
import {
	loadPersonalizedCategories,
	loadPersonalizedCategoriesSuccess,
	loadPersonalizedCategoriesFailure
} from '../actions/personalized';

// load same dump component as for standard category tree
import PersonalizedCategoryTree from '../components/PersonalizedCategoryTree';

const mapDispatchToProps = (dispatch) => {
  return {
		// expose function with same name as used in Categories container
		// but with different callbacks
    loadCategories: () => {
      // load list of categories tracked by authenticated user
      dispatch(loadPersonalizedCategories())
        .then((response) => {
          if (!response.error) {
            dispatch(loadPersonalizedCategoriesSuccess(response.payload));
          } else {
            dispatch(loadPersonalizedCategoriesFailure(response.payload));
          }
        });
    }
  };
};

function mapStateToProps({ personalized }) {
  const { loading, categoryTree, error } = personalized;

  return {
    error,
    loading,
    categoryTree
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalizedCategoryTree);
