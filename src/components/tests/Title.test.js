import React from 'react';
import {MegaTitleClover} from '../Title';
import renderer from 'react-test-renderer';

describe('Title Styled Components', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MegaTitleClover></MegaTitleClover>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })});
