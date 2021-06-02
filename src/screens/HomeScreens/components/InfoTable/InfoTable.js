import React, {useState} from 'react'
import {Button,Table} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { delInfoAction, changeCheckedstatusAction, changeAllCheckedstatusAction, delSelectedInfoAction} from '../../../../redux/actions'

const InfoTable=()=> {

    const infos= useSelector(state=>state.infos)
    const allinfo = infos.infos
    const [allChecked, setAllChecked]=useState(false)
    console.log(infos)
    const dispatch = useDispatch()
    const deleteInfoHandler=(id)=>{
        dispatch(delInfoAction(id))
    }
    const checkedItemHandler=(event)=>{
        var isChecked=event.target.checked;   
        var infoid=parseInt(event.target.value);
        dispatch(changeCheckedstatusAction({isChecked:isChecked,id:infoid}))
        setAllChecked(!allChecked)
    }
    const selectAllHandler=(event)=>{
        dispatch(changeAllCheckedstatusAction(event.target.checked))
        // allinfo.map(item=>item.isChecked=event.target.checked)
        setAllChecked(!allChecked)
    }
    
    const deleteSelectedInfoHandler=()=>{
        dispatch(delSelectedInfoAction())
    }

    return (
        <>
        <div>
        <Button onClick={deleteSelectedInfoHandler}>Delete seleted</Button>
        </div>
        
        <Table>
            <thead>
                <tr>
                    <th><input type="checkbox" onChange={selectAllHandler}/></th>
                    <th>Description</th>
                    <th>Content</th>
                    <th>Operate</th>
                </tr>
            </thead>
            <tbody>
                {allinfo && allinfo.map(item=>(
                    
                        <tr key={item.id} >
                            <td>
                                <input type="checkbox" value={item.id} onChange={checkedItemHandler} checked={item.isChecked}/>
                            </td>
                            <LinkContainer to={`/todo/${item.id}`}>
                            <td>{item.description}</td>
                            </LinkContainer>
                            <td>{item.category}</td>
                           <td><button onClick={() => deleteInfoHandler(item.id)}>Delete</button></td>
                        </tr>
                
                ))}
            </tbody>
        </Table>
        </>
    )
}

export default InfoTable