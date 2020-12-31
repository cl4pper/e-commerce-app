import React, { useState } from 'react';
import classnames from 'classnames';

// STYLE
import './Modal.scss';

// COMPONENTS
import { Title, IconsHandler } from '@lib';

const Modal = (props) => {
	const { title, content, open } = props;

	const [show, handleShow] = useState(open);

	return (
		<div
			className={classnames('Modal', {
				'Modal--closed': !show
			})}>
			<div className="Modal__container">
				<div className="Modal__closeIcon" onClick={() => handleShow(false)}>
					<IconsHandler icon="close" dataTestId="modal-close-icon" />
				</div>
				{title
					? <Title subtitle dataTestId="modal-title">{title}</Title>
					: null
				}
				{content}
			</div>
		</div>
	);
};

export { Modal };
