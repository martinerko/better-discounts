import React, { Component, PropTypes } from 'react';
import CategoryTree from './CategoryTree';
import Slider from 'react-rangeslider';

export default class App extends Component {
	static propTypes = {
		categoryPath: PropTypes.array.isRequired,
		percentage: PropTypes.number.isRequired,
		loadCategories: PropTypes.func.isRequired,
		setDiscountsPercentage: PropTypes.func.isRequired,
		categoryChildren: PropTypes.array,
		categoryDetail: PropTypes.object,
		loading: PropTypes.bool,
		error: PropTypes.object
	};

	handlePercentageChange(percentage) {
		console.log(percentage);
	}

	renderSlider() {
		const {percentage, setDiscountsPercentage} = this.props;
		return (
			<div className="percentage">
				<span style={{ float: 'left' }}>Discount:</span>
				<Slider step={10} value={percentage} onChange={setDiscountsPercentage} max={90} />
				<span style={{ float: 'right' }}>{' ' + percentage + '%'}</span>
				<div style={{ clear: 'both' }} />
			</div>
			);
	}

	render() {
		return (
			<div className="left-menu">
				{this.renderSlider()}
				<div className="collapse navbar-collapse navbar-ex1-collapse">
					<CategoryTree {...this.props} />
				</div>
			</div>
			);
	}
}
