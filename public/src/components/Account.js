import React, { Component, PropTypes } from 'react';
import ChangePasswordForm from './ChangePasswordForm';

export default class Account extends Component {
	static propTypes = {
		profile: PropTypes.object.isRequired,
		changePassword: PropTypes.func.isRequired
	};

	render() {
		const {name, email} = this.props.profile;

		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="col-xs-6">
						<p>
							<label className="control-label">
								Name:
							</label>
							{name}
						</p>
						<p>
							<label className="control-label">
								Email:
							</label>
							{email}
						</p>
					</div>
				</div>
				<div className="col-xs-12">
					<div style={{width:'300px'}}>
						<ChangePasswordForm changePassword={this.props.changePassword} />
					</div>
				</div>
			</div>
			);
	}
}
