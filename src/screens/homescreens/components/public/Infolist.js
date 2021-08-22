import React,{useContext} from 'react'
import {Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {useTranslation} from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
import { updateInfoAction } from '../../../../redux/actions'
import { InfosContext } from '../../../../context/InfosContext'

function Infolist(props) {
    const { t } = useTranslation();
    const {userInfo}=useContext(InfosContext)
    const dispatch=useDispatch();
    var item= props.item
    const updateHandler=(e)=>{
        console.log("change task")
        dispatch(updateInfoAction(item._id,e.target.value,userInfo))
    }
    return (
        <tr key={item._id}>
            {/* <td>
                <input type="checkbox" value={item._id} onChange={props.onChange} checked={item.isChecked}/>
            </td> */}
            <LinkContainer to={`/todo/${item._id}`}>   
                <td>{item.description}</td>
            </LinkContainer> 
            <td>
                <select defaultValue={item.completed.toString()} onChange={updateHandler}>
                    <option value="false">false</option>
                    <option value="true">true</option>
                </select>
            </td>
                {/* <td>{item.completed.toString()}</td>  */}

            <td><Button variant="light" onClick={props.onClick}>{t('todolist.delete')}</Button></td>
        </tr> 
    )
}

export default Infolist
