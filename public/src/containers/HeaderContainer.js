import { connect } from 'react-redux';
import Header from '../components/Header';
import { logout } from '../actions/authentication';

function mapStateToProps({authentication}) {
	const {isAuthenticated, isAdmin, profile} = authentication;

	return {
		isAuthenticated,
		isAdmin,
		profile
	};
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		showAuthenticationForm: () => {
			$('#authenticationModal').modal('show');
		},
		logout: () => {
			dispatch(logout());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
