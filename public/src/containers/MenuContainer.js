// define smart container
import { connect } from 'react-redux';

// load dump component
import Menu from '../components/Menu';

function mapStateToProps({ authentication }) {
  const { isAuthenticated } = authentication;

  return {
    isAuthenticated
  };
}

export default connect(mapStateToProps, null)(Menu);
