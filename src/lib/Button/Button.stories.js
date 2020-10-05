import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Button } from './Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

const props = {
	label: 'Button label',
	loading: false,
	onClick: () => window.alert('Button clicked!'),
};

stories.add('Default', () => (
	<Button
		loading={boolean('loading', props.loading)}
		label={text('label', props.label, null)}
		onClick={props.onClick}
		secondary={boolean('secondary', false)} />
));
