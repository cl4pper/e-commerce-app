import React from 'react';
import classnames from 'classnames';

// STYLE
import './Button.scss';

// COMPONENTS
import { Text } from '@lib';

const Button = (props) => {
	const { label, onClick, secondary } = props;

	return (
		<button className={classnames('Button', {
			'Button--secondary': secondary
		})} onClick={onClick}>
			<Text text={label} bold center />
		</button>
	);
};

export { Button };
