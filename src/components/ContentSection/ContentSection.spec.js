import React from 'react';
import renderer from 'react-test-renderer';
import { ContentSection } from './ContentSection';

describe('ContentSection', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<ContentSection light={false}><p>Content</p></ContentSection>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
