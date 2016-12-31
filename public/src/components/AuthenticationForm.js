import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class AuthenticationForm extends Component {
	static propTypes = {
		isAuthenticated: PropTypes.bool
	}

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

	renderLoginForm() {
		const {loginFormActive} = this.state;
		const loginTabFromClass = classNames('tab-pane', 'fade', 'in', {
			'active': loginFormActive
		});

		return (
			<div className={loginTabFromClass} id="login-form">
				<div className="col-xs-6">
					<div className="well">
						<form id="loginForm" method="POST" action="/login/">
							<div className="form-group">
								<label htmlFor="username" className="control-label">Username</label>
								<input type="text" className="form-control" id="username" name="username" value="" required="" title="Please enter you username" placeholder="example@gmail.com"
								/>
								<span className="help-block"></span>
							</div>
							<div className="form-group">
								<label htmlFor="password" className="control-label">Password</label>
								<input type="password" className="form-control" id="password" name="password" value="" required="" title="Please enter your password" />
								<span className="help-block"></span>
							</div>
							<div id="loginErrorMsg" className="alert alert-error hide">Wrong username or password</div>
							<div className="checkbox">
								<label>
									<input type="checkbox" name="remember" id="remember" /> Remember login
								</label>
								<p className="help-block">(if this is a private computer)</p>
							</div>
							<button type="submit" className="btn btn-success btn-block">Login</button>
							<a href="/forgot/" className="btn btn-default btn-block">Forgotten password</a>
						</form>
					</div>
				</div>
				<div className="col-xs-6">
					<p className="lead">Register now for <span className="text-success">FREE</span></p>
					<ul className="list-unstyled" style={{ lineHeight: 2 }}>
						<li><span className="fa fa-check text-success" />See all your subscribtions</li>
						<li><span className="fa fa-check text-success" />Save your favorites</li>
						<li><span className="fa fa-check text-success" />Get instant notifications to your email</li>
					</ul>
					<p><a href="#registration-form" data-toggle="tab" className="btn btn-info btn-block" onClick={this.showRegistrationFormClick}>Yes please, register now!</a></p>
				</div>
			</div>
			);
	}

	renderRegistrationForm() {
		const {loginFormActive} = this.state;
		const registrationTabFromClass = classNames('tab-pane', 'fade', 'in', {
			'active': !loginFormActive
		});
		return (
			<div className={registrationTabFromClass} id="registration-form">
				<div className="col-xs-12">
					<div className="well">
						<form id="registrationForm" method="POST" action="/signup/">
							<div className="form-group">
								<label htmlFor="registrationName" className="control-label">Name</label>
								<input type="text" className="form-control" id="registrationName" name="name" value=""
									required title="Please enter your name" />
								<span className="help-block" />
							</div>
							<div className="form-group">
								<label htmlFor="registrationEmail" className="control-label">Email</label>
								<input type="email" className="form-control" id="registrationEmail" name="email"
									required title="Please enter your registration email" placeholder="example@gmail.com" />
								<span className="help-block" />
							</div>
							<div className="form-group">
								<label htmlFor="registrationPassword" className="control-label">Password</label>
								<input type="password" className="form-control" id="registrationPassword" name="password"
									required title="Please enter your password" />
								<span className="help-block" />
							</div>
							<div className="form-group">
								<label htmlFor="registrationConfirmPassword" className="control-label">Confirm Password</label>
								<input type="password" className="form-control" id="registrationConfirmPassword" name="confirmPassword"
									required title="Please enter your password" />
								<span className="help-block" />
							</div>
							<button type="submit" className="btn btn-success btn-block">Register</button>
						</form>
					</div>
				</div>
			</div>
			);
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
								{this.renderLoginForm()}
								{this.renderRegistrationForm()}
							</div>
						</div>
					</div>
				</div>
			</div>);
	}

	render() {
		const {isAuthenticated} = this.props;
		return isAuthenticated ? null : this.renderDetail();
	}
}
