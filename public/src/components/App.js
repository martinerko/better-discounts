import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    loadUserLocation: PropTypes.func,
    children: PropTypes.node.isRequired
  };

  componentWillMount() {
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
