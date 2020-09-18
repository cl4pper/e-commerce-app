import React from 'react';
import renderer from 'react-test-renderer';
import { MainLink } from './MainLink';

describe('MainLink', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<MainLink to="" light={false}>Link</MainLink>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
