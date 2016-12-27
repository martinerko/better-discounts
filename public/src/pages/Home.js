import React, { Component } from 'react';
import DiscountsGridContainer from '../containers/DiscountsGridContainer';

export default class Home extends Component {

	render() {
		return (
			<div>
				<h2>Today's best discounts</h2>
				<DiscountsGridContainer categoryPath={[]} />
			</div>
			);
	}
}
