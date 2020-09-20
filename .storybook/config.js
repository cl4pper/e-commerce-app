import { configure } from '@storybook/react';

const lib = require.context('@lib', true, /\.stories\.js$/);
const components = require.context('@components', true, /\.stories\.js$/);
const containers = require.context('@containers', true, /\.stories\.js$/);

function loadStories() {
	lib.keys().forEach((filename) => lib(filename));
	components.keys().forEach((filename) => components(filename));
	containers.keys().forEach((filename) => containers(filename));
}

configure(loadStories, module);
