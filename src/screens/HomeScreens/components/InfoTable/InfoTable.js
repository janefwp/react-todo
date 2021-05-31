import React from 'react'
import {Button,Table} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { delInfoAction } from '../../../../redux/actions'

const InfoTable=()=> {

    const infos= useSelector(state=>state.infos)
    const allinfo = infos.infos
    console.log(infos)
    const dispatch = useDispatch()
    const deleteInfoHandler=(id)=>{
        dispatch(delInfoAction(id))
    }

    return (
        <>
        <div>
        <Button>Delete seleted</Button>
        </div>
        
        <Table>
            <thead>
                <tr>
                    <th><input type="checkbox" /></th>
                    <th>Description</th>
                    <th>Content</th>
                    <th>Operate</th>
                </tr>
            </thead>
            <tbody>
                {allinfo && allinfo.map(item=>(
                    
                        <tr key={item.id} >
                            <td>
                                <input type="checkbox" />
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
