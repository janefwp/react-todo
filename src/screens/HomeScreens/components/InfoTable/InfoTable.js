import React, {useState, useContext} from 'react'
import {Button,Table, Container} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import { delInfoAction, changeCheckedstatusAction, changeAllCheckedstatusAction, delSelectedInfoAction} from '../../../../redux/actions'
import { InfosContext } from '../../../../context/InfosContext'
import './InfoTable.scss'

const InfoTable=()=> {

    // const infos= useSelector(state=>state.infos)
    const {infos, changeCheckedStatus, selectAll, delInfo, delSeleted}=useContext(InfosContext)
    // const allinfo = infos.infos
    const [allChecked, setAllChecked]=useState(false)
    const [selectedChecked, setSelectedChecked]=useState(false)
    console.log(infos)
    // const dispatch = useDispatch()
    const deleteInfoHandler=(id)=>{
        // dispatch(delInfoAction(id))
        delInfo(id)
    }
    const checkedItemHandler=(event)=>{
        var isChecked=event.target.checked;   
        var infoid=parseInt(event.target.value);
        changeCheckedStatus({isChecked:isChecked,id:infoid})
        // dispatch(changeCheckedstatusAction({isChecked:isChecked,id:infoid}))
        setSelectedChecked(!selectedChecked)
    }
    const selectAllHandler=(event)=>{
        // dispatch(changeAllCheckedstatusAction(event.target.checked))
        // allinfo.map(item=>item.isChecked=event.target.checked)
        selectAll(event.target.checked)
        setAllChecked(!allChecked)
    }
    
    const deleteSelectedInfoHandler=()=>{
        // dispatch(delSelectedInfoAction())
        delSeleted()
        setAllChecked(false)
        setSelectedChecked(false)
    }

    return (
        <Container>
        <h3>Todo List</h3>
        <br />
        <div>
        <Button variant='secondary' onClick={deleteSelectedInfoHandler}>Delete seleted</Button>
        </div>
        <br />
        <Table>
            <thead>
                <tr>
                    <th><input type="checkbox" checked={allChecked} onChange={selectAllHandler}/></th>
                    <th>Description</th>
                    <th>Content</th>
                    <th>Operate</th>
                </tr>
            </thead>
            <tbody>
                {infos && infos.map(item=>(
                    
                        <tr key={item.id} className={item.isChecked ? 'selected': ''} >
                            <td>
                                <input type="checkbox" value={item.id} onChange={checkedItemHandler} checked={item.isChecked}/>
                            </td>
                            <LinkContainer to={`/todo/${item.id}`}>
                            <td>{item.description}</td>
                            </LinkContainer>
                            <td>{item.category}</td>
                           <td><Button variant="light" onClick={() => deleteInfoHandler(item.id)}>Delete</Button></td>
                        </tr>
                
                ))}
            </tbody>
        </Table>
        </Container>
    )
}

export default InfoTable
