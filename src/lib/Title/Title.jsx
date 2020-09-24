import React from 'react';
import classnames from 'classnames';

// STYLE
import './Title.scss';

const Title = (prop) => {
	const { content, subtitle, bold, underline, center, right } = prop;

	return (
		<p className={classnames('Title', {
			'Title--subtitle': subtitle,
			'Title--bold': bold,
			'Title--underline': underline,
			'Title--center': center,
			'Title--right': right,
		})}>{content}</p>
	);
};

export { Title };
