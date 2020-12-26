import React from 'react';
import classnames from 'classnames';

// STYLE
import './Title.scss';

const Title = (prop) => {
	const { children, smaller, bold, underline, center, right, breakline } = prop;

	return (
		<div className="Title">
			<p
				className={classnames('Title__content', {
					'Title__content--smaller': smaller,
					'Title__content--bold': bold,
					'Title__content--underline': underline,
					'Title__content--center': center && !right,
					'Title__content--right': right && !center
				})}>
				{children}
			</p>
			{breakline && <hr className="TitleComponent__breakline" />}
		</div>
	);
};

export { Title };
