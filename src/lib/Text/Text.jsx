import React from 'react';
import classnames from 'classnames';

// STYLE
import './Text.scss';

const Text = props => {
	const { children, alert, subtext, bold, italic, underline, center, right } = props;

	return (
		<p
			className={classnames('Text', {
				'Text--alert': alert && !subtext,
				'Text--subtext': subtext && !alert,
				'Text--bold': bold,
				'Text--italic': italic,
				'Text--underline': underline,
				'Text--center': center && !right,
				'Text--right': right && !center
			})}>
			{children}
		</p>
	);
};

export { Text };
