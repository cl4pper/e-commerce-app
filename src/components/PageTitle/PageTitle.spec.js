import React from 'react';
import renderer from 'react-test-renderer';
import { PageTitle } from './PageTitle';

describe('PageTitle', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<PageTitle children="Hello" light={false} subtitle="World" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
