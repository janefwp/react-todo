import React from 'react'
import {Row,Col,Button} from 'react-bootstrap'
import TodoForm from './components/todoform/TodoForm'
import InfoTable from './components/infotable/InfoTable'

function HomeScreen() {

    return (
        <InfoTable />
        // <Row>
        //     <Col md={4} className='bg-light'>
        //         <TodoForm />
        //     </Col>
        //     <Col md ={8}>
        //         <InfoTable />
        //     </Col>
        // </Row>
 
    )
}

export default HomeScreen
