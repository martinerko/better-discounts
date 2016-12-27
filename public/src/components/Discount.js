import React, { Component, PropTypes } from 'react';

export default class Discount extends Component {
	static propTypes = {
		detail: PropTypes.object.isRequired
	};

	render() {
		const {percentage, manufacturer, name, priceNew, code, thumbnail, link} = this.props.detail;

		return (
			<div className="thumbnail">
				<a href={link} target="_blank">
					<img src={thumbnail} alt={manufacturer + ' - ' + name} />
				</a>
				<div className="caption">
					<h4 className="pull-right">${priceNew} (-{percentage}%)</h4>
					<h4><a href={link} target="_blank">{name}</a>
									</h4>
					<small>{manufacturer} {code}</small>
				</div>
			</div>
			);
	}
}
