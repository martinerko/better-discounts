// define smart container
import { connect } from 'react-redux';
import { loadCategories, loadCategoriesSuccess, loadCategoriesFailure } from '../actions/categories';

// load dump component
import CategoryTree from '../components/CategoryTree';

const mapDispatchToProps = (dispatch) => {
  return {
    loadCategories: () => {
      // load category tree
      dispatch(loadCategories())
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

function mapStateToProps({ categories }) {
  const { loading, categoryTree, error } = categories;

  return {
    error,
    loading,
    categoryTree
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTree);
