import React from 'react';
import { render } from '@testing-library/react';

import { Title } from './Title';

const children = 'Title content';
const titleContentClassname = 'Title__content';

describe('[lib] Title:', () => {
	it('should be rendered', () => {
		const { container } = render(<Title>{children}</Title>);

		expect(container.firstChild.className).toBe('Title');
	});

	it('should render title content', () => {
		const { getByText } = render(<Title>{children}</Title>);
		const content = getByText(children);

		expect(content.className).toBe('Title__content');
		expect(content.textContent).toBe('Title content');
	});

	it('should apply smaller style when smaller prop is set', () => {
		const { getByText } = render(<Title smaller>{children}</Title>);
		const content = getByText(children);

		expect(content.classList.contains('Title__content--smaller')).toBeTruthy();
	});

	it('should apply bold style when bold prop is set', () => {
		const { getByText } = render(<Title bold>{children}</Title>);
		const content = getByText(children);

		expect(content.classList.contains('Title__content--bold')).toBeTruthy();
	});

	it('should apply underline style when underline prop is set', () => {
		const { getByText } = render(<Title underline>{children}</Title>);
		const content = getByText(children);

		expect(content.classList.contains('Title__content--underline')).toBeTruthy();
	});

	it('should apply center alignment when center prop is set', () => {
		const { getByText } = render(<Title center>{children}</Title>);
		const content = getByText(children);

		expect(content.classList.contains('Title__content--center')).toBeTruthy();
	});

	it('should apply right alignment when right prop is set', () => {
		const { getByText } = render(<Title right>{children}</Title>);
		const content = getByText(children);

		expect(content.classList.contains('Title__content--right')).toBeTruthy();
	});

	it('should NOT apply any alignment when right and center props are set', () => {
		const { getByText } = render(<Title center right>{children}</Title>);
		const content = getByText(children);

		expect(content.classList.contains('Title__content--center')).toBeFalsy();
		expect(content.classList.contains('Title__content--right')).toBeFalsy();
	});
});
