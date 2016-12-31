import React, { Component, PropTypes } from 'react';

export default class App extends Component {
	static propTypes = {
		authenticateUser: PropTypes.func.isRequired,
		loadUserLocation: PropTypes.func.isRequired,
		children: PropTypes.node.isRequired,
		filter: PropTypes.string
	};

	componentWillMount() {
		// this.props.authenticateUser();
		this.props.loadUserLocation();
	}

	render() {
		return (
			<div className="container-fluid">
				{this.props.children}
			</div>
			);
	}
}
