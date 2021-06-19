import React, {useState, useEffect} from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

function RegisterScreen({location,history}) {
    const initialUser={
        name:'',
        email:'',
        password:'',
        age:0

    }
    const [user, setUser]=useState(initialUser)
    const redirect = location.search ? location.search.split('=')[1] : `/`
    const [loading,setLoading]=useState(false)
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
            {"name":user.name,"email":user.email,"password":user.password,"age":user.age},
            config
            )
            .then(res=>{
                setLoading(true)
                console.log(res.response)
                toast(res.response.data)
            })
            .catch(error=>{
                console.log(error.response)
                toast(error.response.data)
            })

    }

    useEffect(()=> {
       if(loading)
       {
        history.push(redirect)
       }
            
        
    },[loading])

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
                <Row className='py-3'>
                <Col>
                    Have a Account? <Link 
                    to ={redirect ? `/login?redirect=${redirect}` : `/login`} >
                        Sign In
                    </Link>
                </Col>
            </Row>
            </Col>

        </Row>
    )
}

export default RegisterScreen
