import React, { Component, PropTypes } from 'react';
import AppContainer from '../containers/AppContainer';
import HeaderContainer from '../containers/HeaderContainer';
import CategoryTreeContainer from '../containers/CategoryTreeContainer';

export default class App extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		params: PropTypes.object
	};

	resolveCategoryPath() {
		const {level1, level2, level3} = this.props.params;
		return [level1, level2, level3].filter(c => c);
	}

	render() {
		return (
			<AppContainer>
				<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
					<HeaderContainer />
					<CategoryTreeContainer categoryPath={this.resolveCategoryPath()} />
				</nav>
				<div id="page-wrapper">
					<div className="container-fluid">
						{this.props.children}
					</div>
				</div>
			</AppContainer>
			);
	}
}
