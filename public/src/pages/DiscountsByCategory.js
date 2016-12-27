import React, { Component, PropTypes } from 'react';
import DiscountsByCategoryContainer from '../containers/DiscountsByCategoryContainer';

export default class DiscountsByCategory extends Component {
	static propTypes = {
		params: PropTypes.object
	};

	render() {
		return (
			<DiscountsByCategoryContainer />
			);
	}
}
