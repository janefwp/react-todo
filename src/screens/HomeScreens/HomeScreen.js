import React from 'react'

import {Row,Col, } from 'react-bootstrap'
import TodoForm from './components/TodoForm/TodoForm'
import InfoTable from './components/InfoTable/InfoTable'

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
