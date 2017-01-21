import React, { Component, PropTypes } from 'react';
import Discount from './Discount';

export default class DiscountsGrid extends Component {
	static propTypes = {
		categoryPath: PropTypes.array.isRequired,
		percentage: PropTypes.number.isRequired,
		loadDiscounts: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool.isRequired,
		subscribedProducts: PropTypes.object.isRequired,
		data: PropTypes.array,
		loading: PropTypes.bool,
		error: PropTypes.object
	};

	loadData() {
		const {categoryPath, loadDiscounts, percentage} = this.props;
		loadDiscounts(categoryPath, percentage);
	}

	componentWillMount() {
		this.loadData();
	}

	componentDidUpdate(prevProps) {
		// make sure to reload products in category and also subscribed products when:
		// ...the url has changed
		if (this.props.categoryPath !== prevProps.categoryPath) {
			this.loadData();
		// ...the percentage filter has changed
		} else if (this.props.percentage !== prevProps.percentage) {
			this.loadData();
		}
	}

	renderDetail() {
		const {loading, error, data} = this.props;
		if (loading) {
			return <div>Loading...</div>;
		} else if (error) {
			return <div style={{ color: 'red' }}>
											{error.message}
										</div>;
		} else if (data) {
			return this.renderDiscounts();
		} else {
			return (<div>No data</div>);
		}
	}

	renderDiscounts() {
		const {data, subscribedProducts, isAuthenticated} = this.props;
		if (!data.length) {
			return <div>No discounts found</div>;
		}
		return this.props.data.map((discount, i) => {
			const productCode = discount.code;
			const isSubscribed = productCode in subscribedProducts;
			return (
				<div className="col-sm-3 col-lg-3 col-md-3" key={productCode + '_' + i}>
					<Discount detail={discount} isSubscribed={isSubscribed} isAuthenticated={isAuthenticated} />
				</div>);
		});
	}

	render() {
		return (
			<div className="row">
				{this.renderDetail()}
			</div>);
	}
}
