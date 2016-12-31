import { connect } from 'react-redux';
import Header from '../components/Header';

function mapStateToProps({authentication}) {
	const {isAuthenticated, isAdmin, profile} = authentication;

	return {
		isAuthenticated,
		isAdmin,
		profile
	};
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//
//   }
// }

export default connect(mapStateToProps, null)(Header);
