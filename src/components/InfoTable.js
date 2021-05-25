import React from 'react'
import {Button,Table} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const InfoTable=props=> {

    // const handleDelete=(id)=>{
    //     props.deleteInfo(id)
    // }
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
                {props.allinfo.map(item=>(
                    
                        <tr key={item.id} >
                            <td>
                                <input type="checkbox" />
                            </td>
                            <LinkContainer to={`/todo/${item.id}`}>
                            <td>{item.description}</td>
                            </LinkContainer>
                            <td>{item.category}</td>
                           <td><button onClick={() => props.deleteInfo(item.id)}>Delete</button></td>
                        </tr>
                
                ))}
            </tbody>
        </Table>
        </>
    )
}

export default InfoTable
