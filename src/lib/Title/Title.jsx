import React from 'react';
import classnames from 'classnames';

// STYLE
import './Title.scss';

const Title = (prop) => {
	const { content, subtitle, bold, underline, center, right, breakline } = prop;

	return (
		<div className="TitleComponent">
			<p className={classnames('Title', {
				'Title--subtitle': subtitle,
				'Title--bold': bold,
				'Title--underline': underline,
				'Title--center': center,
				'Title--right': right,
			})}>{content}</p>
			{ breakline && <hr className="TitleComponent__breakline" /> }
		</div>
	);
};

export { Title };
