import React from 'react';

// STYLE
import './Button.scss';

const Button = (props) => {
	const { label, onClick } = props;

	return (
		<button className="Button" onClick={onClick}>
			{label}
		</button>
	);
};

export { Button };
