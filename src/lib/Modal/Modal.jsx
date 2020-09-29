import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

// STYLE
import './Modal.scss';

// COMPONENTS
import { Title } from '@lib';
import { CloseIcon } from '@icons';

const Modal = ({ title, content }) => {
	const [open, handleOpen] = useState(true);

	return (
		<div
			className={classnames('Modal', {
				'Modal--closed': !open
			})}>
			<div className="Modal__container">
				<div className="Modal__closeIcon" onClick={() => handleOpen(false)}><CloseIcon /></div>
				{title ? <Title content={title} subtitle /> : null}
				{content}
			</div>
		</div>
	);
};

export { Modal };
