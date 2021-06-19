import React from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'


function LoginScreen() {
    return (

        <Row className="justify-content-md-center">
            <Col xs={12} md={4}>
                <Form>
                    <Form.Group controlId="email">
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />    
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button type="submit">Login</Button>   
                </Form> 
                <Row className='py-3'>
                    <Col>
                        New Customer? <Link to='/register'>Register</Link>
                    </Col>
                </Row>
            </Col>

        </Row>
        
    )
}

export default LoginScreen
