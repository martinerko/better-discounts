import React, { Component, PropTypes } from 'react';

export default class Discount extends Component {
	static propTypes = {
		loading: PropTypes.bool.isRequired
	};

	render() {
		const {loading} = this.props;
		return loading ? <div id="preloader" /> : null;
	}
}
