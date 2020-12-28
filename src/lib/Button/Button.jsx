import React from 'react';
import classnames from 'classnames';

// STYLE
import './Button.scss';

// COMPONENTS
import { Text, IconsHandler } from '@lib';

const Button = (props) => {
	const { label, onClick, secondary, loading } = props;

	return (
		<button
			className={classnames('Button', {
				'Button--secondary': secondary
			})}
			onClick={onClick}>
			{loading && (
				<IconsHandler icon="loader" dataTestId="button-loading-icon" className="Button__loader" />
			)}
			{!loading && (
				<Text bold center>
					{label}
				</Text>
			)}
		</button>
	);
};

export { Button };
