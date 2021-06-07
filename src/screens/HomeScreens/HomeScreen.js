import React from 'react'
import { ToastProvider } from 'react-toast-notifications';
import {Row,Col, Container} from 'react-bootstrap'
import TodoForm from './components/todoform/TodoForm'
import InfoTable from './components/infotable/InfoTable'

function HomeScreen() {

    return (
        <ToastProvider>
        <Row>
            <Col md={4} className='bg-light'>
                <TodoForm />
            </Col>
            <Col md ={8}>
                <InfoTable />
            </Col>
        </Row>
        </ToastProvider>
    )
}

export default HomeScreen
