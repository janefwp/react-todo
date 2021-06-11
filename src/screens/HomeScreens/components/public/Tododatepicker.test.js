import React from 'react';
import renderer from 'react-test-renderer';
import Tododatepicker from './Tododatepicker'

it('renders correctly when there is no input for datepicker', () => {
    const tree = renderer.create(<Tododatepicker />).toJSON();
    expect(tree).toMatchSnapshot();
  });
it('renders correctly with all props for datepicker', () => {
    const endDate=new Date()
    const onChangeHandle=()=>{
        console.log("set date")
    }
    const tree = renderer.create(<Tododatepicker label="Deadline" as="DatePicker" name="dealine" selected={endDate} onChange={onChangeHandle}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });




