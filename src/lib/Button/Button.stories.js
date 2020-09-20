import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Button } from './Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

const props = {
	label: 'Button label',
	onClick: () => window.alert('Button clicked!'),
};

stories.add('Default', () => (
	<Button
		label={text('Label', props.label, null)}
		onClick={props.onClick} />
));
