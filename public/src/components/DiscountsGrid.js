import React, { Component, PropTypes } from 'react';
import Discount from './Discount';

export default class BestDiscounts extends Component {
	static propTypes = {
		categoryPath: PropTypes.array,
		loadDiscounts: PropTypes.func,
		data: PropTypes.array,
		loading: PropTypes.bool,
		error: PropTypes.object
	};

	loadData() {
		const {categoryPath, loadDiscounts} = this.props;
		loadDiscounts(categoryPath);
	}

	componentWillMount() {
		this.loadData();
	}

	componentDidUpdate(prevProps) {
		// make sure to reload categories when the url has changed
		if (this.props.categoryPath !== prevProps.categoryPath) {
			this.loadData();
		}
	}

	renderDetail() {
		const {loading, error, data} = this.props;
		if (loading) {
			return 'Loading';
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
		return this.props.data.map((discount, i) => {
			return (
				<div className="col-sm-4 col-lg-4 col-md-4" key={discount.code + '_' + i}>
					<Discount detail={discount} />
				</div>
				);
		});
	}

	render() {
		return (
			<div className="row">
				{this.renderDetail()}
			</div>
			);
	}
}
