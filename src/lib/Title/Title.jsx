import React from 'react';
import classnames from 'classnames';

// STYLE
import './Title.scss';

const Title = (props) => {
	const { children, smaller, bold, underline, center, right, breakline, dataTestId } = props;

	return (
		<div className="Title" data-testid={dataTestId}>
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
