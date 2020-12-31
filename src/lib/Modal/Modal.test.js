import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Modal } from './Modal';

const modalTitle = 'Modal Title';
const modalContent = <p>Hello, Modal</p>;

const genericProps = {
	title: modalTitle,
	content: modalContent,
};

describe('[lib] Modal:', () => {
	it('should be on the screen when open prop is true', () => {
		const { container } = render(<Modal {...genericProps} open={true} />);

		expect(container.firstChild.classList.contains('Modal')).toBeTruthy();
		expect(container.firstChild.classList.contains('Modal--closed')).toBeFalsy();
	});

	it('should NOT be on the screen when open prop is false', () => {
		const { container } = render(<Modal {...genericProps} open={false} />);

		expect(container.firstChild.classList.contains('Modal')).toBeTruthy();
		expect(container.firstChild.classList.contains('Modal--closed')).toBeTruthy();
	});

	it('should render title', () => {
		const { getByTestId } = render(<Modal {...genericProps} />);

		expect(getByTestId('modal-title').firstChild.textContent).toBe('Modal Title');
	});

	it('should render content', () => {
		render(<Modal {...genericProps} />);

		expect(screen.queryByText('Hello, Modal')).toBeTruthy();
	});

	it('should be closed clicking on close icon', async () => {
		const { container, getByTestId } = render(<Modal {...genericProps} />);
		const closeIcon = getByTestId('modal-close-icon');

		await fireEvent.click(closeIcon);

		expect(container.firstChild.classList.contains('Modal--closed')).toBeTruthy();
	});
});
