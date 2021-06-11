import React from 'react';
import renderer from 'react-test-renderer';
import TodoInput from './TodoInput'

it('renders correctly when there is input type', () => {
    const tree = renderer.create(<TodoInput as="input"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

it('renders correctly when there is textarea type', () => {
    const tree = renderer.create(<TodoInput as="textarea"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });