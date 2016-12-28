import React, { Component, PropTypes } from 'react';
import AppContainer from '../containers/AppContainer';
import HeaderContainer from '../containers/HeaderContainer';
import LeftMenuContainer from '../containers/LeftMenuContainer';
import Loader from '../containers/LoaderContainer';

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
				<Loader />
				<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
					<HeaderContainer />
					<LeftMenuContainer categoryPath={this.resolveCategoryPath()} />
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
