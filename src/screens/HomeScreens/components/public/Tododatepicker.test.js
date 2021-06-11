import React from 'react';
import renderer from 'react-test-renderer';
import Tododatepicker from './Tododatepicker'

it('renders correctly when there is no input', () => {
    const tree = renderer.create(<Tododatepicker />).toJSON();
    expect(tree).toMatchSnapshot();
  });