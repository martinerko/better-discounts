import React, { Component, PropTypes } from 'react';
import AppContainer from '../containers/AppContainer';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    return (
      <AppContainer>
				{this.props.children}
			</AppContainer>
    );
  }
}
