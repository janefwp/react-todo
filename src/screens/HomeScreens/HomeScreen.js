import React from 'react'

import {Row,Col, } from 'react-bootstrap'
import TodoForm from './components/todoform/TodoForm'
import InfoTable from './components/infotable/InfoTable'

function HomeScreen() {


    return (
        <Row>
            <Col md={4}>
                <TodoForm />
            </Col>
            <Col md ={8}>
                <InfoTable />
            </Col>
        </Row>
    )
}

export default HomeScreen
