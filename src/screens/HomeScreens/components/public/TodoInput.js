import React from 'react'
import './Todocom.scss'
function TodoInput(props) {

    return (
        <fieldset>
                <label>{props.label}</label>
                <props.as  name={props.name} required={props.required} onChange={props.onChange}></props.as>          
        </fieldset>
    )
}

export default TodoInput
