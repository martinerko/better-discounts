import React, { Component, PropTypes } from 'react';

export default class Discount extends Component {
	static propTypes = {
		detail: PropTypes.object.isRequired
	};

	render() {
		const {percentage, manufacturer, name, priceNew, code, thumbnail, link} = this.props.detail;

		return (
			<div className="thumbnail">
				<div className="caption">
					<small>{manufacturer}</small>
					<h4><a href={link} target="_blank">{name}</a>
															</h4>
				</div>
				<a href={link} target="_blank">
					<img src={thumbnail} alt={manufacturer + ' - ' + name} />
				</a>
				<div className="btn-group pull-right">
					<button type="button" className="btn btn-default">$
						{priceNew} (-
						{percentage}%)</button>
					<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<span className="caret"></span>
						<span className="sr-only">Toggle Dropdown</span>
					</button>
					<ul className="dropdown-menu">
						<li><a href="#">Action</a></li>
						<li><a href="#">Another action</a></li>
						<li><a href="#">Something else here</a></li>
						<li role="separator" className="divider"></li>
						<li><a href="#">Separated link</a></li>
					</ul>
				</div>
			</div>
			);
	}
}
