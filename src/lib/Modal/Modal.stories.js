import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Modal } from './Modal';
import { Text } from '@lib';

const stories = storiesOf('Modal', module);
stories.addDecorator(withKnobs);

const props = {
	title: 'Modal title',
	content: <Text content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisi nibh, pulvinar id mauris blandit, feugiat laoreet metus." />
};

stories.add('Default', () => (
	<Modal
		title={text('title', props.title, null)}
		content={props.content}
	/>
));
