import React from 'react';
import {CloverImage} from '../Image';
import renderer from 'react-test-renderer';

describe('Image Styled Components', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CloverImage></CloverImage>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })});
