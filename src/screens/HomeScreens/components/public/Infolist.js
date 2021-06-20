import React from 'react'
import {Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {useTranslation} from 'react-i18next';

function Infolist(props) {
    const { t } = useTranslation();
    var item= props.item
    return (
        <tr className={item.isChecked ? 'selected': ''} key={item.id} >
        <td>
            <input type="checkbox" value={item.id} onChange={props.onChange} checked={item.isChecked}/>
        </td>
        <LinkContainer to={`/todo/${item.id}`}>   
        <td>{item.description}</td>
        </LinkContainer>  
        <td>{item.category}</td>
        
        <td>{item.deadline.toDateString()}</td>
       <td><Button variant="light" onClick={props.onClick}>{t('todolist.delete')}</Button></td>
    </tr> 
    )
}

export default Infolist
