import React,{useState,useEffect} from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

function LoginScreen({location,history}) {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const redirect = location.search ? location.search.split('=')[1] : `/`
    const submitHandler=(e)=>{
        e.preventDefault()

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
            console.log(email)
            console.log(password)
            axios.post('https://api-nodejs-todolist.herokuapp.com/user/login',
            {"email":email,"password":password},
            config
            )
            .then(()=>{
                setLoading(true)
                toast("Login successfully")
            }
                
            )
            .catch(
                toast("Unable to login")
            )

    }
    useEffect(() => {
        if(loading)
        {
            history.push(redirect)
        }
        
    }, [loading])

    return (

        <Row className="justify-content-md-center">
            <Col xs={12} md={4}>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="email">
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>    
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
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
