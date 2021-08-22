import React from 'react';
import renderer from 'react-test-renderer';
import TodoSelect from './TodoSelect'

it('renders correctly when there is select type', () => {
    const tree = renderer.create(<TodoSelect as="select"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when there are type and label', () => {
    const tree = renderer.create(<TodoSelect as="select" label="Categrory"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly when there are type,label, name', () => {
    const tree = renderer.create(<TodoSelect as="select" label="Categrory" name="category"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders correctly when there are type,label, name,requrie', () => {
    const tree = renderer.create(<TodoSelect as="select" label="Categrory" name="category" required={true}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly when there are type,label, name,requrie, onChange', () => {
    const onChangeHandler=(e)=>{
        console.log("select category")
    }
    const tree = renderer.create(<TodoSelect as="select" label="Categrory" name="category" required={true} onChange={onChangeHandler}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });