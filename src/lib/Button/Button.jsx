import React from 'react';
import classnames from 'classnames';

// STYLE
import './Button.scss';

const Button = (props) => {
	const { label, onClick, secondary } = props;

	return (
		<button className={classnames('Button', {
			'Button--secondary': secondary
		})} onClick={onClick}>
			{label}
		</button>
	);
};

export { Button };
