import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Button } from './Button';

const label = 'Button label';

describe('[lib] Button:', () => {
	it('should be rendered', () => {
		const { container } = render(<Button />);

		expect(container.firstChild.className).toBe('Button');
	});

	it('should has a label and NO loading icon', () => {
		const { queryAllByText, queryAllByTestId } = render(<Button label={label} />);

		expect(queryAllByText(label).length).toBe(1);
		expect(queryAllByTestId('button-loading-icon').length).toBe(0);
	});

	it('should apply secondary style when secondary prop is set', () => {
		const { container } = render(<Button secondary />);

		expect(container.firstChild.classList.contains('Button--secondary')).toBeTruthy();
	});

	it('should show loader icon and hide label while loading', () => {
		const { queryAllByTestId, queryAllByText } = render(<Button loading label={label} />);

		expect(queryAllByText(label).length).toBe(0);
		expect(queryAllByTestId('button-loading-icon').length).toBe(1);
	});

	it('should fire event when clicked', async () => {
		const event = jest.fn();
		const { container } = render(<Button onClick={() => event()} />);
		const button = container.firstChild;

		await fireEvent.click(button);

		expect(event).toHaveBeenCalled();
	});
});
