import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// STYLE
import './Text.scss';

const Text = props => {
	const { content, tall, small, bold, italic, underline, center, right } = props;

	return (
		<p
			className={classnames('Text', {
				'Text--tall': tall && !small,
				'Text--small': small && !tall,
				'Text--bold': bold,
				'Text--italic': italic,
				'Text--underline': underline,
				'Text--center': center && !right,
				'Text--right': right && !center
			})}>
			{content}
		</p>
	);
};

Text.propTypes = {
  content: PropTypes.string.isRequired,
  tall: PropTypes.bool,
  small: PropTypes.bool,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  underline: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
};

export { Text };
