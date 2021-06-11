import React from 'react';
import renderer from 'react-test-renderer';
import TodoSelect from './TodoSelect'

it('renders correctly when there is select type', () => {
    const tree = renderer.create(<TodoSelect as="select"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  