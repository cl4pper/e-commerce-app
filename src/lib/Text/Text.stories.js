import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Text } from './Text';

const stories = storiesOf('Text', module);
stories.addDecorator(withKnobs);

const props = {
	content: 'Text comes here',
};

stories.add('Default', () => (
	<Text
		alert={boolean('alert', false)}
		subtext={boolean('subtext', false)}
		bold={boolean('bold', false)}
		italic={boolean('italic', false)}
		underline={boolean('underline', false)}
		center={boolean('center', false)}
		right={boolean('right', false)}>
			{text('content', props.content, null)}
		</Text>
));
