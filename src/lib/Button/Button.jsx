import React from 'react';
import classnames from 'classnames';

// STYLE
import './Button.scss';

// COMPONENTS
import { Text } from '@lib';
import { LoadingIcon } from '@icons';

const Button = (props) => {
	const { label, onClick, secondary, loading } = props;

	return (
		<button
			className={classnames('Button', {
				'Button--secondary': secondary
			})}
			onClick={onClick}>
			{loading ? <LoadingIcon className="Button__loader" /> : <Text content={label} bold center />}
		</button>
	);
};

export { Button };
