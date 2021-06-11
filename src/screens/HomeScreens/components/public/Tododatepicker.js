import React from 'react'
import DatePicker from "react-datepicker";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import './Tododatepicker.scss'
function Tododatepicker(props) {
    return (
        <div>
            
            <label className='datePickerLabel' htmlFor={props.name}>{props.label}</label>    
            <DatePicker selected={props.selected} onChange={props.onChange} className="datepicker"/> 
              
        </div>
    )
}

export default Tododatepicker
