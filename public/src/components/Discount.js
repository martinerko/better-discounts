import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import ActionButton from '../containers/ActionButtonContainer';

export default class Discount extends Component {
	static propTypes = {
		detail: PropTypes.object.isRequired,
		isSubscribed: PropTypes.bool.isRequired,
		isAuthenticated: PropTypes.bool.isRequired
	};

	render() {
		const {percentage, manufacturer, name, priceNew, thumbnail, link, code} = this.props.detail;

		const subscriptionClassName = classNames('btn', this.props.isSubscribed //
			? 'btn-success' : 'btn-default', 'dropdown-toggle');

		return (
			<div className="thumbnail">
				<div className="caption">
					<small>{manufacturer}</small>
					<h4><a href={link} target="_blank">{name}</a></h4>
				</div>
				<a href={link} target="_blank">
					<img src={thumbnail} alt={manufacturer + ' - ' + name} />
				</a>
				<div className="btn-group pull-right">
					<button type="button" className="btn btn-default">
						{priceNew} (-
						{percentage}%)
					</button>
					<button type="button" className={subscriptionClassName} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" disabled={!this.props.isAuthenticated}>
						<span className="caret" />
						<span className="sr-only">Toggle Dropdown</span>
					</button>
					<ActionButton productCode={code} />
				</div>
			</div>);
	}
}
