// define smart container
import { connect } from 'react-redux';
import { loadBestDiscounts, loadBestDiscountsSuccess, loadBestDiscountsFailure } from '../actions/discounts';

// load dump component
import BestDiscounts from '../components/BestDiscounts.js';

const mapDispatchToProps = (dispatch) => {
  return {
    loadBestDiscounts: () => {
      // resolve user location from public API
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

function mapStateToProps({ discounts }) {
  const { loading, bestDiscounts, error } = discounts;

  return {
    error,
    loading,
    bestDiscounts
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BestDiscounts);
