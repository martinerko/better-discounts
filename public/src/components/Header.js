import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  static propTypes = {
    resolvedLocation: PropTypes.bool,
    location: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.object
  };

  renderLocationDetails() {
    const { loading, error, location } = this.props;
    if (loading) {
      return 'Loading';
    } else if (error) {
      return <div style={{ color: 'red' }}>{error.message }</div>;
    } else if (location) {
      return (
        <div>{location.city} {location.country}</div>
      );
    } else {
      return (<div>Unknown location</div>);
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
				<div id="navbar" className="navbar-collapse collapse">
					{this.renderLocationDetails()}
				</div>
			</nav>
    );
  }
}
