import React, { Component, PropTypes } from 'react';
import AppContainer from '../containers/AppContainer';
import HeaderContainer from '../containers/HeaderContainer';
import MenuContainer from '../containers/MenuContainer';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    return (
      <AppContainer>
				<HeaderContainer />
				<MenuContainer />
				{this.props.children}
			</AppContainer>
    );
  }
}
