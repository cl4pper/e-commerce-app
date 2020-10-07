import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { TextInput } from './TextInput';

const stories = storiesOf('TextInput', module);
stories.addDecorator(withKnobs);

const props = {
	label: 'Input label',
	placeholder: 'Input text...',
	disabled: false,
	error: false,
	errorLabel: 'Invalid Input',
	onChange: (value) => console.log('input text: ', value)
};

stories.add('Default', () => (
	<TextInput
		id='textinput-id'
		error={boolean('error', props.error)}
		disabled={boolean('disabled', props.disabled)}
		label={text('label', props.label, null)}
		placeholder={text('placeholder', props.label, null)}
		onChange={props.onClick}
		error={boolean('error', props.error)}
		errorLabel={text('errorLabel', props.errorLabel, null)} />
));
