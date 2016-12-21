import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    authenticateUser: PropTypes.func.isRequired,
    loadUserLocation: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
  };

  componentWillMount() {
    this.props.authenticateUser();
    this.props.loadUserLocation();
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}
