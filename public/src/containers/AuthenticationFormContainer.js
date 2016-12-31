import { connect } from 'react-redux';
import AuthenticationForm from '../components/AuthenticationForm';

function mapStateToProps({authentication}) {
	const {isAuthenticated} = authentication;

	return {
		isAuthenticated
	};
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//
//   }
// }

export default connect(mapStateToProps, null)(AuthenticationForm);
