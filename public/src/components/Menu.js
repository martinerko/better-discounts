import React, { Component, PropTypes } from 'react';
import CategoryTreeContainer from '../containers/CategoryTreeContainer';
import PersonalizedCategoryTree from '../containers/PersonalizedCategoryTree';

export default class App extends Component {
	static propTypes = {
		isAuthenticated: PropTypes.bool.isRequired,
		level1: PropTypes.string,
		level2: PropTypes.string,
		level3: PropTypes.string
	};

	renderCategoryTree() {
		// TODO add currently selected category based on route
		return (<CategoryTreeContainer />);
	}

	renderPersonalizedCategoryTree() {
		return (this.props.isAuthenticated ? <PersonalizedCategoryTree /> : null);
	}

	render() {
		return (
			<div className="collapse navbar-collapse navbar-ex1-collapse">
				{this.renderCategoryTree()}
			</div>
			);
	}
}
