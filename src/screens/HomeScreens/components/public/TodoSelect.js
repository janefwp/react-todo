import React from 'react'
import './Todocom.scss'
function TodoSelect(props) {
    return (
        <fieldset>
            <label>{props.label}</label>

                <props.as name={props.name} required={props.required} onChange={props.onChange}>
                    <option value="">Choose...</option>
                    <option value="css">css</option>
                    <option value="html">html</option>
                </props.as>

            
        </fieldset>
    )
}

export default TodoSelect
