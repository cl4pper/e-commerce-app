import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { CommitItem } from './CommitItem';

const stories = storiesOf('CommitItem', module);
stories.addDecorator(withKnobs);

const PROPS = {
	date: new Date(),
	commit: 'Commit Test'
};

stories.add('Default', () => (
	<CommitItem commit={text('Commit', PROPS.commit, null)} date={PROPS.date} />
));
