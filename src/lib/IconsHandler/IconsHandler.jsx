import React from 'react';

// ICONS
import { LoadingIcon, CloseIcon } from '@icons';

const IconsHandler = ({ icon, small, large, className, dataTestId }) => {
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

		return {
			height: '20px',
			width: '20px'
		};
	};

	const svgProps = {
		...setSize(),
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
