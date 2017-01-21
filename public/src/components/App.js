import React, { Component, PropTypes } from 'react';

export default class App extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		loadSubscriptions: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool.isRequired
	};

	componentWillMount() {
		this.props.isAuthenticated && this.props.loadSubscriptions();
	}
	componentDidUpdate(prevProps) {
		// make sure to reload products in category and also subscribed products when:
		// ...the url has changed
		if (this.props.isAuthenticated !== prevProps.isAuthenticated) {
			if (this.props.isAuthenticated) {
				this.props.loadSubscriptions();
			} else {
				// TODO cleanup
			}
		}
	}

	render() {
		return (
			<div className="container-fluid">
				{this.props.children}
			</div>);
	}
}
