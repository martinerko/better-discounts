import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default function(PageComponent) {
	class Authenticate extends Component {
		static propTypes = {
			params: PropTypes.object,
			isAuthenticated: PropTypes.bool.isRequired
		};

		static contextTypes = {
			router: PropTypes.object.isRequired
		}

		componentWillMount() {
			if (!this.props.isAuthenticated) {
				this.context.router.push('/');
			}
		}

		componentWillUpdate(nextProps) {
			if (!nextProps.isAuthenticated) {
				this.context.router.push('/');
			}
		}
		render() {
			return <PageComponent {...this.props} />;
		}
	}

	function mapStateToProps({authentication}) {
		return {
			isAuthenticated: authentication.isAuthenticated
		};
	}
	// connnect to store to be able to get isAuthenticated property
	return connect(mapStateToProps, null)(Authenticate);
}
