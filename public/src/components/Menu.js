import React, { Component, PropTypes } from 'react';
import CategoryTreeContainer from '../containers/CategoryTreeContainer';
import PersonalizedCategoryTree from '../containers/PersonalizedCategoryTree';

export default class App extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
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
      <nav className="navbar navbar-default" style={{
        backgroundColor: 'yellow'
      }}>
				<div id="navbar" className="">
					{this.renderCategoryTree()}
					{this.renderPersonalizedCategoryTree()}
				</div>
			</nav>
    );
  }
}
