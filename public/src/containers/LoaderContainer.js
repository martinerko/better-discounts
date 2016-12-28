// define smart container
import { connect } from 'react-redux';
// load dump component
import Loader from '../components/Loader';

function mapStateToProps(state) {
	const loading = Object.keys(state).some(s => state[s].loading);

	return {
		loading
	};
}

export default connect(mapStateToProps, null)(Loader);
