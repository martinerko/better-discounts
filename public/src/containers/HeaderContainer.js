import { connect } from 'react-redux';
import Header from '../components/Header';

function mapStateToProps({ users }) {
  const { loading, location, error } = users;

  return {
    error,
    loading,
    location
  };
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//
//   }
// }

export default connect(mapStateToProps, null)(Header);
