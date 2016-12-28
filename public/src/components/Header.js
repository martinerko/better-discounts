import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

export default class Header extends Component {
	static propTypes = {
		resolvedLocation: PropTypes.bool,
		location: PropTypes.object,
		loading: PropTypes.bool,
		error: PropTypes.object
	};

	render() {
		return (
			<div>
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</button>
					<Link to="/" className="navbar-brand">Better Discounts</Link>
				</div>
				<ul className="nav navbar-right top-nav">
					<li className="dropdown">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							<i className="fa fa-user" /> Logged User <b className="caret" />
						</a>
						<ul className="dropdown-menu">
							<li>
								<a href="#"><i className="fa fa-fw fa-user" /> Profile</a>
							</li>
							<li>
								<a href="#"><i className="fa fa-fw fa-envelope" /> Inbox</a>
							</li>
							<li>
								<a href="#"><i className="fa fa-fw fa-gear" /> Settings</a>
							</li>
							<li className="divider" />
							<li>
								<a href="#"><i className="fa fa-fw fa-power-off" /> Log Out</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			);
	}
}
