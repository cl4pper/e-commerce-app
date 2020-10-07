import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

// STYLE
import './Modal.scss';

// COMPONENTS
import { Title } from '@lib';
import { CloseIcon } from '@icons';

const Modal = ({ title, content, open }) => {
	const [show, handleShow] = useState(open);

	return (
		<div
			className={classnames('Modal', {
				'Modal--closed': !show
			})}>
			<div className="Modal__container">
				<div className="Modal__closeIcon" onClick={() => handleShow(false)}>
					<CloseIcon />
				</div>
				{title ? <Title content={title} subtitle /> : null}
				{content}
			</div>
		</div>
	);
};

export { Modal };
