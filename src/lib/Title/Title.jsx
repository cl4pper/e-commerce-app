import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// STYLE
import './Title.scss';

const Title = props => {
	const { content, small, bold, underline, center, right, breakline, dataTestId } = props;

	return (
		<div className="Title" data-testid={dataTestId}>
			<p
				className={classnames('Title__content', {
					'Title__content--small': small,
					'Title__content--bold': bold,
					'Title__content--underline': underline,
					'Title__content--center': center && !right,
					'Title__content--right': right && !center
				})}>
				{content}
			</p>
			{breakline && <hr className="TitleComponent__breakline" />}
		</div>
	);
};

Title.propTypes = {
  content: PropTypes.string.isRequired,
  small: PropTypes.bool,
  bold: PropTypes.bool,
  underline: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
	breakline: PropTypes.bool,
	dataTestId: PropTypes.string.isRequired,
};

export { Title };
