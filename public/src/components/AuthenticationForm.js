import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

class AuthenticationForm extends Component {
	static propTypes = {
		isAuthenticated: PropTypes.bool,
		registerUser: PropTypes.func.isRequired,
		signInUser: PropTypes.func.isRequired
	};

	state = {
		loginFormActive: true
	}

	constructor(props) {
		super(props);
		this.showRegistrationFormClick = this.showRegistrationFormClick.bind(this);
		this.showLoginFormClick = this.showLoginFormClick.bind(this);
	}

	showRegistrationFormClick(e) {
		e.preventDefault();
		this.setState({
			loginFormActive: false
		});
	}

	showLoginFormClick(e) {
		e.preventDefault();
		this.setState({
			loginFormActive: true
		});
	}

	renderLoginTab() {
		const {signInUser} = this.props;
		const {loginFormActive} = this.state;
		const loginTabFromClass = classNames('tab-pane', 'fade', 'in', {
			'active': loginFormActive
		});

		return (
			<div className={loginTabFromClass} id="login-form">
				<div className="col-xs-6">
					{<LoginForm signInUser={signInUser} />}
				</div>
				<div className="col-xs-6">
					<p className="lead">Register now for
						<span className="text-success"> FREE</span>
					</p>
					<ul className="list-unstyled" style={{ lineHeight: 2 }}>
						<li><span className="fa fa-check text-success" />See all your subscribtions</li>
						<li><span className="fa fa-check text-success" />Save your favorites</li>
						<li><span className="fa fa-check text-success" />Get instant notifications to your email</li>
					</ul>
					<p>
						<a href="#registration-form" data-toggle="tab" className="btn btn-info btn-block" onClick={this.showRegistrationFormClick}>Yes please, register now!</a>
					</p>
				</div>
			</div>);
	}

	renderRegistrationTab() {
		const {registerUser} = this.props;
		const {loginFormActive} = this.state;
		const registrationTabFromClass = classNames('tab-pane', 'fade', 'in', {
			'active': !loginFormActive
		});
		return (
			<div className={registrationTabFromClass} id="registration-form">
				<div className="col-xs-12">
					<RegistrationForm registerUser={registerUser} />
				</div>
			</div>);
	}

	renderDetail() {
		const {loginFormActive} = this.state;
		const loginTabLinkClass = classNames({
			'active': loginFormActive
		});
		const registrationTabLinkClass = classNames({
			'active': !loginFormActive
		});

		return (
			<div className="modal" id="authenticationModal" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header" style={{ borderBottom: 'none', paddingBottom: '0px' }}>
							<button type="button" className="close" data-dismiss="modal">
								<span aria-hidden="true">×</span>
								<span className="sr-only">Close</span>
							</button>
							<ul className="nav nav-tabs">
								<li className={loginTabLinkClass}>
									<a href="#login-form" onClick={this.showLoginFormClick}>Login</a>
								</li>
								<li className={registrationTabLinkClass}>
									<a href="#registration-form" onClick={this.showRegistrationFormClick}>Register</a>
								</li>
							</ul>
						</div>
						<div className="modal-body">
							<div className="row tab-content">
								{this.renderLoginTab()}
								{this.renderRegistrationTab()}
							</div>
						</div>
					</div>
				</div>
			</div>);
	}

	render() {
		const {isAuthenticated} = this.props;
		return isAuthenticated
			? null
			: this.renderDetail();
	}
}

export default AuthenticationForm;
