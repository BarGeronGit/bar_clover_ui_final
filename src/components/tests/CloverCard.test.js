import React from 'react';
import {CloverCard} from '../CloverCard';
import renderer from 'react-test-renderer';

describe('CloverCard Styled Components', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CloverCard></CloverCard>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })});
