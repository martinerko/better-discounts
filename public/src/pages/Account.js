import React, { Component, PropTypes } from 'react';
import AccountContainer from '../containers/AccountContainer';

export default class Account extends Component {
	static propTypes = {
		params: PropTypes.object
	};

	render() {
		return (
			<div>
				<h2>Your Profile Details</h2>
				<AccountContainer />
			</div>
		);
	}
}
