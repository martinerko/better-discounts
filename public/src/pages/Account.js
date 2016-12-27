import React, { Component, PropTypes } from 'react';

export default class Account extends Component {
	static propTypes = {
		params: PropTypes.object
	};

	render() {
		return (
			<div>Account
				{' '}
				{this.props.params.userID || 'no user'}
			</div>
			);
	}
}
