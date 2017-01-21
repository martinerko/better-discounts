import React, { Component, PropTypes } from 'react';

export default class ActionButton extends Component {
	static propTypes = {
		isSubscribed: PropTypes.bool.isRequired,
		productCode: PropTypes.string.isRequired,
		subscribe: PropTypes.func.isRequired,
		unsubscribe: PropTypes.func.isRequired
	};

	constructor(props) {
		super(props);
		this.onSubscriptionClick = this.onSubscriptionClick.bind(this);
	}

	onSubscriptionClick(e) {
		const {productCode, isSubscribed} = this.props;
		e.preventDefault();
		this.props[isSubscribed ? 'unsubscribe' : 'subscribe'](productCode);
	}

	render() {
		const {isSubscribed} = this.props;
		return (
			<ul className="dropdown-menu">
				<li>
					<a href="#" onClick={this.onSubscriptionClick}>
						{isSubscribed ? 'Unsubscribe' : 'Subcribe'}
					</a>
				</li>
				<li role="separator" className="divider" />
				<li><a href="#">Separated link</a></li>
			</ul>);
	}
}
