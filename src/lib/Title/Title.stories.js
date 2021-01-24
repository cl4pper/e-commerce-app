import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Title } from './Title';

const stories = storiesOf('Title', module);
stories.addDecorator(withKnobs);

const props = {
	content: 'Title comes here',
};

stories.add('Default', () => (
	<Title
		dataTestId="title-stories"
		content={text('content', props.content, null)}
		small={boolean('small', false)}
		breakline={boolean('breakline', false)}
		bold={boolean('bold', false)}
		underline={boolean('underline', false)}
		center={boolean('center', false)}
		right={boolean('right', false)}/>
));
