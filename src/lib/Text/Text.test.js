import React from 'react';
import { render } from '@testing-library/react';

import { Text } from './Text';

const children = 'Text content';

describe('[lib] Text:', () => {
	it('should be rendered', () => {
		const { container } = render(<Text>{children}</Text>);

		expect(container.firstChild.className).toBe('Text');
	});

	it('should render the text content', () => {
		const { getByText } = render(<Text>{children}</Text>);

		expect(getByText(children).textContent).toBe('Text content');
	});

	it('should apply alert style when alert prop is set', () => {
		const { container } = render(<Text alert>{children}</Text>);

		expect(container.firstChild.classList.contains('Text--alert')).toBeTruthy();
	});

	it('should apply subtext style when subtext prop is set', () => {
		const { container } = render(<Text subtext>{children}</Text>);

		expect(container.firstChild.classList.contains('Text--subtext')).toBeTruthy();
	});

	it('should apply bold style when bold prop is set', () => {
		const { container } = render(<Text bold>{children}</Text>);

		expect(container.firstChild.classList.contains('Text--bold')).toBeTruthy();
	});

	it('should apply italic style when italic prop is set', () => {
		const { container } = render(<Text italic>{children}</Text>);

		expect(container.firstChild.classList.contains('Text--italic')).toBeTruthy();
	});

	it('should apply underline style when underline prop is set', () => {
		const { container } = render(<Text underline>{children}</Text>);

		expect(container.firstChild.classList.contains('Text--underline')).toBeTruthy();
	});

	it('should apply center alignment when center prop is set', () => {
		const { container } = render(<Text center>{children}</Text>);

		expect(container.firstChild.classList.contains('Text--center')).toBeTruthy();
	});

	it('should apply right alignment when right prop is set', () => {
		const { container } = render(<Text right>{children}</Text>);

		expect(container.firstChild.classList.contains('Text--right')).toBeTruthy();
	});

	it('should NOT apply any alignment when right and ceter props are set', () => {
		const { container } = render(<Text right center>{children}</Text>);

		expect(container.firstChild.classList.contains('Text--right')).toBeFalsy();
		expect(container.firstChild.classList.contains('Text--center')).toBeFalsy();
	});
});
