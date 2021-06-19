import React, {useState} from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import toast from 'react-hot-toast'
function RegisterScreen() {
    const initialUser={
        name:'',
        email:'',
        password:'',
        age:0

    }
    const [user, setUser]=useState(initialUser)


    const changeHandler=(e)=>{
        const {name, value}=e.target
        setUser({ ...user, [name]: value })
        
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
      
            axios.post('https://api-nodejs-todolist.herokuapp.com/user/register',
            {"name":user.name,"email":user.email,"password":user.email},
            config
            )
            .then()
            .catch(error=>{
                console.log(error.response)
                toast(error.response.statusText)
            })

    }

    return (
        <Row className="justify-content-md-center">
            <Col xs={12} md={4}>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="name">
                        <Form.Label >Name</Form.Label>
                        <Form.Control required type="name" placeholder="Name" name="name" onChange={changeHandler}/>    
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label >Email</Form.Label>
                        <Form.Control required type="email" placeholder="Email" name="email" onChange={changeHandler}/>    
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" name="password" onChange={changeHandler}/>
                    </Form.Group>

                    <Form.Group controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control required type="age" placeholder="Age" name="age" onChange={changeHandler}/>
                    </Form.Group>

                    <Button type='submit' variant='primary'>Register</Button>
                </Form> 
                
            </Col>

        </Row>
    )
}

export default RegisterScreen
