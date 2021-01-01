import React from 'react';

// ICONS
import { LoadingIcon, CloseIcon } from '@icons';

const IconsHandler = (props) => {
	const { icon, small, large, className, dataTestId } = props;

	// set icon size
	const setSize = () => {
		if (small) {
			return {
				height: '16px',
				width: '16px'
			};
		}

		if (large) {
			return {
				height: '32px',
				width: '32px'
			};
		}
	};

	const svgProps = {
		...setSize() || null,
		className,
		dataTestId
	};

	// select respective icon svg icon
	switch (icon) {
		case 'loader':
			return <LoadingIcon {...svgProps} />;
		case 'close':
			return <CloseIcon {...svgProps} />;
		default:
			return <LoadingIcon {...svgProps} />;
	}
};

export { IconsHandler };
