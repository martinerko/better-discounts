import React, { Component, PropTypes } from 'react';
import DiscountsGridContainer from '../containers/DiscountsGridContainer';

export default class DiscountsByCategory extends Component {
	static propTypes = {
		params: PropTypes.object
	};

	resolveCategoryPath() {
		const {level1, level2, level3} = this.props.params;
		return [level1, level2, level3].filter(c => c);
	}

	render() {
		return (
			<DiscountsGridContainer categoryPath={this.resolveCategoryPath()} />
			);
	}
}
