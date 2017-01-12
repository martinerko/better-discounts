import React from 'react';
import classNames from 'classnames';

const renderField = ({id, input, label, type, meta: {touched, error, invalid, warning}}) => {
	const formGroupClass = classNames('form-group', {
		'has-error': touched && invalid
	});
	return (
		<div className={formGroupClass}>
			<label htmlFor={id} className="control-label">
				{label}
			</label>
			<input {...input} className="form-control" type={type} id={id} />
			<span className="help-block">
					{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
				</span>
		</div>
		);
};

export default renderField;
